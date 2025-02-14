import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { logout, userLoggedOut } from '@/features/auth/authslice'
import { fetchNotifications, selectUnreadNotificationsCount } from '@/features/notifications/notificationsSlice'
import { selectCurrentUser } from '@/features/users/usersSlice'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectCurrentUser)
  const numUnreadNotifications = useAppSelector(selectUnreadNotificationsCount)
  const isLoggedIn = !!user
  let navContent: React.ReactNode = null
  if (isLoggedIn) {
    const onLogoutClicked = () => {
      dispatch(logout())
    }

    const fetchNewNotifications = () => {
      dispatch(fetchNotifications())
    }

    let unreadNotificationsBadge: React.ReactNode | undefined
    if (numUnreadNotifications > 0) {
      unreadNotificationsBadge = <span className="badge">{numUnreadNotifications}</span>
    }
    return (
      <nav>
        <section>
          <h1>Redux Essentials Example</h1>

          <div className="navContent">
            <div className="navLinks">
              <Link to="/">Posts</Link>
              <Link to="users">Users</Link>
              <Link to="/notifications">Notifications {unreadNotificationsBadge}</Link>
              <button className="button small" onClick={fetchNewNotifications}>
                Refresh Notification
              </button>
            </div>
            <div className="userDetails">
              {user!.name}
              <button className="button small" onClick={onLogoutClicked}>
                Log Out
              </button>
            </div>
          </div>
        </section>
      </nav>
    )
  }
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>
        {navContent}
      </section>
    </nav>
  )
}
