import React, { Component } from 'react'

import Message from './Message'

class MessageList extends Component {
  render() {
    const { messages, room } = this.props
    return (
      <div
        className="MessageList"
        style={styles.messageList}
      >
        <div
          className="roomAnnouncement"
          style={styles.roomAnnouncement}
        >
          <h3 style={styles.h3}>
            #{room.name}
          </h3>
          <p>This is the very beginning of the #{room.name} room.</p>
        </div>

        {
          messages.map(msg => (
            <Message
              message={msg}
              key={msg.id}
            />
          ))
        }
      </div>
    )
  }
}

const styles = {
  messageList: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: '1rem',
    overflowY: 'scroll',
  },

  roomAnnouncement: {
    padding: '2rem 1rem',
  },

  h3: {
    fontSize: '1.5rem',
  },
}

export default MessageList
