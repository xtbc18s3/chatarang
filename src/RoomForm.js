import React, { Component } from 'react'

class RoomForm extends Component {
  state = {
    room: {
      name: '',
      description: '',
    },
  }

  handleChange = ev => {
    const room = {...this.state.room}
    room[ev.target.name] = ev.target.value

    this.setState({ room })
  }

  render() {
    return (
      <div className="RoomForm">
        <main>
          <h2>Create a room</h2>
          <form>
            <p>
              <label htmlFor="name">
                Room Name
              </label>
              <input
                autoFocus
                required
                type="text"
                name="name"
                value={this.state.room.name}
                onChange={this.handleChange}
              />
            </p>

            <p>
              <label htmlFor="description">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={this.state.room.description}
                onChange={this.handleChange}
              />
            </p>

            <div>
              <button
                type="submit"
              >
                Create Room
              </button>
            </div>
          </form>
        </main>
      </div>
    )
  }
}

export default RoomForm
