import Img from "gatsby-image"
import React from "react"
import PropTypes from "prop-types"

import styles from "./WorkItem.module.scss"
import KeywordPill from "../KeywordPill/KeywordPill"

const WorkItem = ({ data, image }) => {
  const { description, duration, learnMore, techStack, title } = data
  return (
    <div className={styles.card}>
      <Img className={styles.image} fluid={image.childImageSharp.fluid} alt={title} />
      <div className={styles.item}>
        <div className={styles.itemHeader}>
          <h4>{title}</h4>
          <span className={styles.label}>{duration}</span>
        </div>
        <ul>
          {description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <div className={styles.pillContainer}>
          <span className={styles.label}>Tech Stack:</span>
          {techStack.map((tech, i) => (
            <KeywordPill key={i} keyword={tech}></KeywordPill>
          ))}
        </div>
        <a href={learnMore} >Check it out</a>
      </div>
    </div>
  )
}

WorkItem.propTypes = {
  data: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired
}

export default WorkItem
