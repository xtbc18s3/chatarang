import React from 'react'

const Sidebar = (props) => {
  return (
    <aside className="Sidebar" style={styles.sidebar}>
      <div className="UserInfo" style={styles.children}>
        <div className="Avatar"></div>
        <div className="user">
          {props.user.displayName}
        </div>
        <a href="#">
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </div>
      <h1 style={styles.h1}>
        XTBC 18
      </h1>
      <nav className="RoomList" style={styles.children}>
        <h2>Rooms</h2>
        <ul>
          <li><a href="#">general</a></li>
          <li><a href="#">random</a></li>
        </ul>
      </nav>
    </aside>
  )
}

const styles = {
  sidebar: {
    backgroundColor: '#333344',
    color: 'rgba(255, 255, 255, 0.8)',
    width: '12rem',
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'column',
  },

  children: {
    padding: '0 1rem',
  },

  h1: {
    color: 'white',
    fontSize: '1.2rem',
    marginTop: 0,
    padding: '0 1rem',
  }
}

export default Sidebar
