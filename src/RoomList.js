import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'

import Room from './Room'

const RoomList = ({ rooms }) => {
  return (
    <nav
      className={`RoomList ${css(styles.roomList)}`}
    >
      <div className={css(styles.heading)}>
        <h2 className={css(styles.h2)}>
          Rooms
        </h2>
        <Link
          className={css(styles.button)}
          to="/chat/new-room"
        >
          <i className="fas fa-plus-circle" title="Add room"></i>
        </Link>
      </div>
      <ul className={css(styles.list)}>
        {
          Object.keys(rooms).map(
            roomName => <Room
                          roomName={roomName}
                          key={roomName}
                        />
          )
        }
      </ul>
    </nav>
  )
}

const styles = StyleSheet.create({
  roomList: {
    padding: '0 1rem',
  },

  h2: {
    fontSize: '1rem',
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },

  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    border: 0,
    backgroundColor: 'transparent',
    outline: 0,
    padding: 0,
    color: 'rgba(255,255,255,0.4)',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'color 0.25s ease-out',

    ':hover': {
      color: 'white',
    }
  },
})

export default RoomList
