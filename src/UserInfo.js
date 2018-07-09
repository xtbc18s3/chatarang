import React from 'react'

import Avatar from './Avatar'
import SignOutButton from './SignOutButton'

const UserInfo = ({ user, signOut }) => {
  return (
    <div
      className="UserInfo"
      style={styles.userInfo}
    >
      <Avatar user={user} />
      <div className="user" style={styles.user}>
        {user.displayName}
      </div>
      <SignOutButton signOut={signOut} />
    </div>
  )
}

const styles = {
  userInfo: {
    padding: '0 1rem',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  },

  user: {
    flex: 1,
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
  },
}

export default UserInfo
