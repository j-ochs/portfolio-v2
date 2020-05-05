import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from './NavLink.scss'

const NavLink = (name, url) => (
  <Link to={url}>{name}</Link>
)

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

NavLink.defaultProps = {
  name: '',
  url: ''
} 

export default NavLink
