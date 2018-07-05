import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '',
  }

  handleChange = (ev) => {
    this.setState({ email: ev.target.value })
  }

  render() {
    return (
      <div className="SignIn">
        <form>
          <input
            autoFocus
            type="email"
            name="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">
            Sign In
          </button>
        </form>
      </div>
    )
  }
}

export default SignIn
