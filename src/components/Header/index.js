// Write your JS code here
import './index.css'

const Header = () => (
  <>
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="header-nav-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="header-nav-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="header-nav-image"
      />
    </div>
    <ul className="header-lg-container">
      <li className="nav-name">Home</li>
      <li className="nav-name">Products</li>
      <li className="nav-name">Cart</li>
    </ul>
  </>
)

export default Header
