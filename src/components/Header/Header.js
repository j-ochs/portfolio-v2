import PropTypes from "prop-types"
import React from "react"

import Nav from "../Nav/Nav"

import styles from "./Header.module.scss"

const Header = ({ siteTitle }) => {
  console.log("head", siteTitle)
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Nav title={siteTitle} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
