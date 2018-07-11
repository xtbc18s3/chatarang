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
    showRoomForm: false,
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

  showRoomForm = () => {
    this.setState({ showRoomForm: true })
  }

  hideRoomForm = () => {
    this.setState({ showRoomForm: false })
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Switch>
          <Route
            path="/chat/new-room"
            render={() => (
              <RoomForm
                addRoom={this.addRoom}
                hideRoomForm={this.hideRoomForm}
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
                  setCurrentRoom={this.setCurrentRoom}
                  showRoomForm={this.showRoomForm}
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
