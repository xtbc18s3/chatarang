import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import base, { auth } from './base'
import Main from './Main'
import SignIn from './SignIn'
import SignUp from './SignUp'

class App extends Component {
  constructor() {
    super()

    const user = JSON.parse(localStorage.getItem('user'))

    this.state = {
      user: user || {},
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(
      user => {
        if (user) {
          // User is signed in
          this.handleAuth(user)
        } else {
          // User is signed out
          this.handleUnauth()
        }
      }
    )
  }

  handleAuth = (oAuthUser) => {
    const user = {
      uid: oAuthUser.uid || oAuthUser.email,
      displayName: oAuthUser.displayName,
      email: oAuthUser.email,
      photoUrl: oAuthUser.photoURL,
    }
    this.syncUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  syncUser = user => {
    this.userRef = base.syncState(
      `users/${this.state.user.uid}`,
      {
        context: this,
        state: 'user',
        then: () => this.setState({ user })
      }
    )
  }

  updateUser = userData => {
    console.log('trying')
    const forbiddenAttributes = ['email', 'uid', 'password']
    const user = {...this.state.user}

    Object.keys(userData).forEach(
      attribute => {
        if (forbiddenAttributes.indexOf(attribute) === -1) {
          user[attribute] = userData[attribute]
        }
      }
    )

    this.setState({ user })
  }

  signedIn = () => {
    return this.state.user.uid
  }

  signOut = () => {
    auth.signOut()
  }

  handleUnauth = () => {
    if (this.userRef) {
      base.removeBinding(this.userRef)
    }

    this.setState({ user: {} })
    localStorage.removeItem('user')
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/sign-up"
            render={() => (
              this.signedIn()
                ? <Redirect to="/chat" />
                : <SignUp updateUser={this.updateUser} />
            )}
          />
          <Route
            path="/sign-in"
            render={() => (
              this.signedIn()
                ? <Redirect to="/chat" />
                : <SignIn />
            )}
          />
          <Route
            path="/chat/rooms/:roomName"
            render={(navProps) => (
              this.signedIn()
                ? <Main
                    user={this.state.user}
                    signOut={this.signOut}
                    {...navProps}
                  />
                : <Redirect to="/sign-in" />
            )}
          />
          <Route
            path="/chat"
            render={(navProps) => (
              this.signedIn()
                ? <Main
                    user={this.state.user}
                    signOut={this.signOut}
                    {...navProps}
                  />
                : <Redirect to="/sign-in" />
            )}
          />
          <Route
            render={() => (
              this.signedIn()
                ? <Redirect to="/chat" />
                : <Redirect to="/sign-in" />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App
