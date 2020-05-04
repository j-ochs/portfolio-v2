import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.scss'

const Header = ({ siteTitle }) => (
  <header>
    <div className="content">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="link">
          {siteTitle}
        </Link>
      </h1>
      <Link to="/page-2/">to page 2</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
