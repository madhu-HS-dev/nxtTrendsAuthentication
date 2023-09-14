// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMessage: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitUserDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.error_msg)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({errorMessage: data.error_msg, showErrorMsg: true})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showErrorMsg, errorMessage} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="login-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-image"
          />
        </div>
        <div className="image-form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-lg"
          />
          <form className="form-container" onSubmit={this.onSubmitUserDetails}>
            <div className="label-container">
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <br />
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="input"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="label-container">
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <br />
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="input"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          {showErrorMsg && <p className="error">{errorMessage}</p>}
        </div>
      </div>
    )
  }
}

export default LoginForm
