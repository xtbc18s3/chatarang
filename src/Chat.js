import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: [
        {
            id: 1,
            user: {
              uid: 123,
              displayName: 'Davey',
              email: 'davey@fretless.com',
            },
            body: 'I enjoy chatting.',
        },
        {
          id: 2,
          user: {
            uid: 456,
            displayName: 'Dana',
            email: 'dana@fretless.com',
          },
          body: 'This guy is so hip. I love my job.',
        },
      ],
    }
  }

  addMessage = (body) => {
    const messages = [...this.state.messages]
    const user = this.props.user

    messages.push({
      id: `${user.uid}-${Date.now()}`,
      user,
      body,
    })

    this.setState({ messages })
  }

  render() {
    return (
      <div className="Chat" style={styles}>
        <ChatHeader />
        <MessageList messages={this.state.messages} />
        <MessageForm addMessage={this.addMessage} />
      </div>
    )
  }
}

const styles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}

export default Chat
