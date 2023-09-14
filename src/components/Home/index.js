// Write your JS code here
import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-lg-nav">
          <div className="home-nav-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="home-website-logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-logout-image"
            />
          </div>
          <Header />
          <button type="button" className="logout-button">
            Logout
          </button>
        </div>
        <div className="clothes-container">
          <div className="home-heading-container">
            <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="home-image"
            />
            <p className="home-description">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes been seen heard
              that way you are. So, celebrate the seasons new and exciting
              fashion in your own way.
            </p>
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-image-lg"
          />
        </div>
      </div>
    )
  }
}

export default Home
