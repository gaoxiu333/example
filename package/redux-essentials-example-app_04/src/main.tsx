import React from 'react'
import { createRoot } from 'react-dom/client'
import { store } from '@/app/store'

import App from './App'

import { worker } from './api/server'

import './primitiveui.css'
import './index.css'
import { Provider } from 'react-redux'
import { apiSliceWithUsers, fetchUsers } from './features/users/usersSlice'

// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
  // Start our mock API server
  await worker.start({ onUnhandledRequest: 'bypass' })

  const root = createRoot(document.getElementById('root')!)
  // store.dispatch(fetchUsers())
  store.dispatch(apiSliceWithUsers.endpoints.getUser.initiate())
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
)
}

start()
