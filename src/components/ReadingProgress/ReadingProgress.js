import PropTypes from "prop-types"
import React from "react"

import styles from "./ReadingProgress.module.scss"

const ReadingProgress = ({ siteTitle }) => {
  console.log("head", siteTitle)
  return (
    <div>
      <div className={styles.content}></div>
    </div>
  )
}

ReadingProgress.propTypes = {
  siteTitle: PropTypes.string
}

ReadingProgress.defaultProps = {
  siteTitle: ``
}

export default ReadingProgress
