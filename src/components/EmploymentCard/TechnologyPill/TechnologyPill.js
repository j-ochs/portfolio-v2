import React from "react"
import PropTypes from "prop-types"

import styles from "./TechnologyPill.module.scss"

const TechnologyPill = ({ technology }) => {
  return (
    <div className={styles.pill}>
      <span className={styles.pillText}>{technology}</span>
    </div>
  )
}

TechnologyPill.propTypes = {
  technology: PropTypes.string.isRequired,
}

export default TechnologyPill
