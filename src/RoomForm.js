import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

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

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.addRoom(this.state.room)
    this.props.hideRoomForm()
  }

  render() {
    return (
      <div className={`RoomForm ${css(styles.roomForm)}`}>
        <main className={css(styles.main)}>
          <h2 className={css(styles.title)}>Create a room</h2>
          <form
            className={css(styles.form)}
            onSubmit={this.handleSubmit}
          >
            <p>
              <label
                htmlFor="name"
                className={css(styles.label)}
              >
                Room Name
              </label>
              <input
                autoFocus
                required
                type="text"
                name="name"
                className={css(styles.input, styles.textInput)}
                value={this.state.room.name}
                onChange={this.handleChange}
              />
            </p>

            <p>
              <label
                htmlFor="description"
                className={css(styles.label)}
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                className={css(styles.input, styles.textInput)}
                value={this.state.room.description}
                onChange={this.handleChange}
              />
            </p>

            <div className={css(styles.buttonContainer)}>
              <button
                type="button"
                className={css(styles.button, styles.cancel)}
                onClick={this.props.hideRoomForm}
              >
                Cancel
              </button>

              <button
                type="submit"
                className={css(styles.button)}
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

const styles = StyleSheet.create({
  roomForm: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f6f6f6',
    zIndex: 1000,
  },

  title: {
    color: '#ff3344',
    fontWeight: 400,
    lineHeight: '80px',
    fontSize: '2rem',
  },

  main: {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    paddingBottom: '3rem',
    width: '40rem',
  },

  form: {
    backgroundColor: 'white',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    marginBottom: '2rem',
    padding: '0 2rem 2rem',
  },

  label: {
    display: 'block',
    textTransform: 'uppercase',
    color: '#999',
  },

  input: {
    fontSize: '1.5rem',
    border: 0,
    borderBottom: '1px solid black',
    margin: '1rem auto',
    textAlign: 'center',
    padding: '0.5rem',

    ':focus': {
      outline: 0,
    },
  },

  textInput: {
    width: '20rem',
  },

  h2: {
    fontWeight: 'normal',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  button: {
    display: 'block',
    padding: '1rem',
    margin: '0 1rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    backgroundColor: '#ff3333',
    color: 'white',
    width: '10rem',
    cursor: 'pointer',
    outline: 0,
  },

  cancel: {
    backgroundColor: 'white',
    color: '#666',
  },
})

export default RoomForm
