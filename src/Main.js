import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
  state = {
    room: {
      name: 's3morning',
      description: 'Ask questions and share code',
    },
    rooms: {
      s3morning: {
        name: 's3morning',
        description: 'Ask questions and share code',
      },

      general: {
        name: 'general',
        description: 'Chat about stuff',
      },

      random: {
        name: 'random',
        description: 'Cat GIFs, etc.',
      },
    },
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar
          user={this.props.user}
          signOut={this.props.signOut}
          rooms={this.state.rooms}
        />
        <Chat
          user={this.props.user}
          room={this.state.room}
        />
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main
