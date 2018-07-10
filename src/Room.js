import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Room = ({ roomName, setCurrentRoom }) => {
  const handleClick = ev => {
    ev.preventDefault()
    setCurrentRoom(roomName)
  }

  return (
    <li className={css(styles.item)}>
      <a
        href="/"
        className={css(styles.link)}
        onClick={handleClick}
      >
        {roomName}
      </a>
    </li>
  )
}

const styles = StyleSheet.create({
  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
})

export default Room
