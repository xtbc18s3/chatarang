import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
import RoomForm from './RoomForm'
import base from './base'

class Main extends Component {
  state = {
    room: {
      name: 'general',
      description: 'Chat about stuff',
    },
    rooms: {},
  }

  componentDidMount() {
    this.roomsRef = base.syncState(
      'rooms',
      {
        context: this,
        state: 'rooms',
        defaultValue: {
          general: {
            name: 'general',
            description: 'Chat about stuff',
          },
        }
      }
    )
  }

  componentWillUnmount() {
    base.removeBinding(this.roomsRef)
  }

  addRoom = room => {
    const rooms = {...this.state.rooms}
    rooms[room.name] = room

    this.setState({ rooms })
  }

  setCurrentRoom = roomName => {
    const room = this.state.rooms[roomName]
    this.setState({ room })
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <RoomForm addRoom={this.addRoom} />
        {/* <Sidebar
          user={this.props.user}
          signOut={this.props.signOut}
          rooms={this.state.rooms}
          setCurrentRoom={this.setCurrentRoom}
        />
        <Chat
          user={this.props.user}
          room={this.state.room}
        /> */}
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
