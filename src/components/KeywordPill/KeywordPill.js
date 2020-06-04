import React from "react"
import PropTypes from "prop-types"

import styles from "./KeywordPill.module.scss"

const KeywordPill = ({ keyword }) => {
  return (
    <div className={styles.pill}>
      <span className={styles.pillText}>{keyword}</span>
    </div>
  )
}

KeywordPill.propTypes = {
  keyword: PropTypes.string.isRequired
}

export default KeywordPill
