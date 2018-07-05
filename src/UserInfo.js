import React from 'react'

const UserInfo = (props) => {
  return (
    <div
      className="UserInfo"
      style={styles.userInfo}
    >
      <div className="Avatar"></div>
      <div className="user" style={styles.user}>
        {props.user.displayName}
      </div>
      <a href="#">
        <i className="fas fa-sign-out-alt"></i>
      </a>
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
  }
}

export default UserInfo
