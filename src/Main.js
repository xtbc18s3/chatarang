import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

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
        },
        then: this.setRoomFromRoute,
      }
    )
  }

  componentDidUpdate(prevProps) {
    const { roomName } = this.props.match.params
    if (prevProps.match.params.roomName !== roomName) {
      this.setRoomFromRoute()
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.roomsRef)
  }

  setRoomFromRoute = () => {
    const { roomName } = this.props.match.params
    this.setCurrentRoom(roomName)
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
        <Switch>
          <Route
            path="/chat/new-room"
            render={(navProps) => (
              <RoomForm
                addRoom={this.addRoom}
                {...navProps}
              />
            )}
          />
          <Route
            path="/chat/rooms/:roomName"
            render={() => (
              <Fragment>
                <Sidebar
                  user={this.props.user}
                  signOut={this.props.signOut}
                  rooms={this.state.rooms}
                />
                <Chat
                  user={this.props.user}
                  room={this.state.room}
                />
              </Fragment>
            )}
          />
          <Route render={() => (
            <Redirect to="/chat/rooms/general" />
          )} />
        </Switch>
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
