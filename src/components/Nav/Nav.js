import { Link } from "gatsby"
import React from "react"

import PropTypes from "prop-types"

import config from "../../config"

import styles from "./Nav.module.scss"

const Nav = siteTitle => (
  <nav className={styles.wrapper}>
    <Link to="/" className={styles.title}>
      {siteTitle.title}
    </Link>
    <ul>
      {config.navLinks.map(({ url, name }, i) => (
        <li key={i}>
          <Link to={url}>{name}</Link>
        </li>
      ))}
    </ul>
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string
}

Nav.defaultProps = {
  siteTitle: ``
}

export default Nav
