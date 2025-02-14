import { client } from '@/api/client'
import { RootState } from '@/app/store'
import { createAppAsyncThunk } from '@/app/withTypes'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

export interface ServerNotification {
  id: string
  date: string
  message: string
  user: string
}

export interface ClientNotification extends ServerNotification {
  read: boolean
  isNew: boolean
}

const notificationsAdapter = createEntityAdapter<ClientNotification>({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
})

export const fetchNotifications = createAppAsyncThunk('notifications/fetchNotifications', async (_unused, thunkApi) => {
  const allNotifications = selectAllNotifications(thunkApi.getState())
  const [latestNotification] = allNotifications
  const latestTimestamp = latestNotification ? latestNotification.date : ''
  const response = await client.get<ServerNotification[]>(`/fakeApi/notifications?since=${latestTimestamp}`)
  return response.data
})

// const initialState: ClientNotification[] = []
const initialState = notificationsAdapter.getInitialState()
const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    allNotificationRead(state) {
      // state.forEach((n) => {
      //   n.read = true
      // })
      Object.values(state.entities).forEach((notification) => {
        notification.read = true
      })
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      const notificationsWithMetadata: ClientNotification[] = action.payload.map((notification) => ({
        ...notification,
        read: false,
        isNew: true,
      }))
      // state.forEach((notification) => {
      //   notification.isNew = !notification.read
      // })
      // state.push(...notificationsWithMetadata)
      // state.sort((a, b) => b.date.localeCompare(a.date))
      Object.values(state.entities).forEach((n) => {
        n.isNew = !n.read
      })
      notificationsAdapter.upsertMany(state, notificationsWithMetadata)
    })
  },
})

export default notificationsSlice.reducer
// export const selectAllNotifications = (state: RootState) => state.notification
export const { selectAll: selectAllNotifications } = notificationsAdapter.getSelectors(
  (state: RootState) => state.notification,
)
export const { allNotificationRead } = notificationsSlice.actions
export const selectUnreadNotificationsCount = (state: RootState) => {
  const allNotifications = selectAllNotifications(state)
  const unreadNotifications = allNotifications.filter((n) => !n.read)
  return unreadNotifications.length
}
