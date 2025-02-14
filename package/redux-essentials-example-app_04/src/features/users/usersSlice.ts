import { RootState } from '@/app/store'
import { createEntityAdapter, createSelector, createSlice, EntityState } from '@reduxjs/toolkit'
import { selectCurrentUsername } from '../auth/authslice'
import { createAppAsyncThunk } from '@/app/withTypes'
import { client } from '@/api/client'
import { apiSlice } from '@/api/apislice'

export interface User {
  id: string
  name: string
}

const emptyUsers: User[] = []

const userAdapter = createEntityAdapter<User>()

export const fetchUsers = createAppAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get<User[]>('/fakeApi/users')
  return response.data
})

// const initialState: User[] = []
const initialState = userAdapter.getInitialState()

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //   return action.payload
    // })
    builder.addCase(fetchUsers.fulfilled, userAdapter.setAll)
  },
})

export const apiSliceWithUsers = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<EntityState<User, string>, void>({
      query: () => '/users',
      transformResponse(res: User[]) {
        return userAdapter.setAll(initialState, res)
      },
    }),
  }),
})

export default usersSlice.reducer
// export const selectAllUsers = (state: RootState) => state.users
// export const selectUserById = (state: RootState, userId: string | null) =>
//   state.users.find((user) => user.id === userId)
export const { selectAll: selectAllUsers, selectById: selectUserById } = userAdapter.getSelectors(
  (state: RootState) => state.users,
)
export const selectUserResult = apiSliceWithUsers.endpoints.getUser.select()
export const selectUsersData = createSelector(selectUserResult, (result) => result.data ?? initialState)
// export const selectAllUsers = createSelector(selectUserResult, (usersResult) => usersResult?.data ?? emptyUsers)
// export const selectUserById = createSelector(
//   selectAllUsers,
//   (state: RootState, userId: string) => userId,
//   (users, userId) => users.find((user) => user.id === userId),
// )
export const selectCurrentUser = (state: RootState) => {
  const currentUsername = selectCurrentUsername(state)
  if (!currentUsername) return
  return selectUserById(state, currentUsername)
}
export const { useGetUserQuery } = apiSliceWithUsers
