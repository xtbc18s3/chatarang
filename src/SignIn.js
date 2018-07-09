import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { auth, googleProvider, githubProvider } from './base'

class SignIn extends Component {
  state = {
    email: '',
  }

  authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  // handleChange = (ev) => {
  //   this.setState({ email: ev.target.value })
  // }

  // handleSubmit = (ev) => {
  //   ev.preventDefault()
  //   this.props.handleAuth({
  //     uid: `${this.state.email}-ksdfjhu32472398`,
  //     displayName: this.state.email,
  //     email: this.state.email,
  //   })
  // }

  render() {
    return (
      <div className={`SignIn ${css(styles.signIn)}`}>
        <header className={css(styles.header)}>
          <span className={css(styles.title)}>
            <i className="fas fa-hashtag"></i>
            Chatarang
          </span>
        </header>
        <main className={css(styles.main)}>
          <form
            className={css(styles.form)}
            onSubmit={this.handleSubmit}
          >
            {/* <label
              htmlFor="email"
              className={css(styles.label)}
            >
              Email
            </label>
            <input
              autoFocus
              type="email"
              name="email"
              className={css(styles.input)}
              value={this.state.email}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className={css(styles.button)}
            >
              Sign In
            </button> */}

            <button
              type="button"
              className={css(styles.button)}
              onClick={() => this.authenticate(googleProvider)}
            >
              Sign in with Google
            </button>

            <button
              type="button"
              className={css(styles.button)}
              onClick={() => this.authenticate(githubProvider)}
            >
              Sign in with GitHub
            </button>
          </form>

          <div className="blurb">
            <h2 className={css(styles.h2)}>
              You're in good company.
            </h2>
            <p>Ones of people are already using Chatarang.</p>
          </div>
        </main>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  signIn: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#f6f6f6',
  },

  header: {
    backgroundColor: '#fff',
    height: '4rem',
    padding: '0 2rem',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
  },

  title: {
    color: '#ff3344',
    fontWeight: 400,
    textTransform: 'uppercase',
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
  },

  form: {
    width: '40rem',
    height: '15rem',
    backgroundColor: 'white',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    marginBottom: '2rem',
    padding: '2rem 0 0',
  },

  label: {
    display: 'block',
    textTransform: 'uppercase',
    color: '#999',
  },

  input: {
    width: '20rem',
    fontSize: '1.5rem',
    border: 0,
    borderBottom: '1px solid black',
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    padding: '0.5rem',

    ':focus': {
      outline: 0,
    },
  },

  h2: {
    fontWeight: 'normal',
  },

  button: {
    display: 'block',
    margin: '0 auto',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    backgroundColor: '#ff3333',
    color: 'white',
    width: '20rem',
  },
})


export default SignIn
