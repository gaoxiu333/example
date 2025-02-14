import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import postsReducer from '@/features/posts/postsSlice'
import usersReducer from '@/features/users/usersSlice'
import authReducer from '@/features/auth/authslice'
import notificationReducer from '@/features/notifications/notificationsSlice'
import { listenerMiddleware } from './listenerMiddleware'

interface CounterState {
  value: number
}

function counterReducer(state: CounterState = { value: 0 }, action: Action) {
  switch (action.type) {
    default: {
      return state
    }
  }
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    auth: authReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
