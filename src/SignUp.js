import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'

import { auth } from './base'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirmation: '',
    errorMessage: null,
  }

  handleChange = (ev) => {
    const newValue = {}
    newValue[ev.target.name] = ev.target.value

    this.setState(newValue)
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    if (this.passwordsMatch()) {
      auth
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  passwordsMatch = () => {
    if (this.state.password !== this.state.passwordConfirmation) {
      this.setState({ errorMessage: 'The passwords you entered do not match.' })
      return false
    }
    return true
  }

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
            <h2>Sign Up</h2>
            <label
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
            <label
              htmlFor="password"
              className={css(styles.label)}
            >
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              className={css(styles.input)}
              value={this.state.password}
              onChange={this.handleChange}
            />
            <label
              htmlFor="passwordConfirmation"
              className={css(styles.label)}
            >
              Re-type Password
            </label>
            <input
              required
              type="password"
              name="passwordConfirmation"
              className={css(styles.input)}
              value={this.state.passwordConfirmation}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className={css(styles.button)}
            >
              Sign Up
            </button>

            <p className={css(styles.error)}>
              {this.state.errorMessage}
            </p>

            <p>
              Already a member? <Link to="/sign-in">Sign in</Link>!
            </p>
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
    paddingBottom: '3rem',
  },

  form: {
    width: '40rem',
    backgroundColor: 'white',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    marginBottom: '2rem',
    paddingBottom: '2rem',
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
    margin: '0 auto 1rem',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    backgroundColor: '#ff3333',
    color: 'white',
    width: '20rem',
  },

  error: {
    color: '#ff3333',
    height: '1.2rem',
  },
})


export default SignUp
