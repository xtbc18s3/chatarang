import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '',
  }

  handleChange = (ev) => {
    this.setState({ email: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.handleAuth({
      uid: `${this.state.email}-ksdfjhu32472398`,
      displayName: this.state.email,
      email: this.state.email,
    })
  }

  render() {
    return (
      <div className="SignIn">
        <form onSubmit={this.handleSubmit}>
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
