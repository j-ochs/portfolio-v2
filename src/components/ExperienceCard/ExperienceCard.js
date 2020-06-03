import Img from "gatsby-image"
import React from "react"
import PropTypes from "prop-types"

import styles from "./ExperienceCard.module.scss"
import TechnologyPill from "./TechnologyPill/TechnologyPill"

const ExperienceCard = ({ data, image }) => {
  const { category, description, duration, learnMore, techStack, title } = data
  return (
    <div className={styles.card}>
      <Img className={styles.image} fluid={image.childImageSharp.fluid} alt={title} />
      <h4>{title}</h4>
      <span className={styles.label}>{duration}</span>
      <div>
        <ul>
          {description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className={styles.pillContainer}>
          <span className={styles.label}>Tech Stack:</span>
          {techStack.map((technology, i) => (
            <TechnologyPill key={i} technology={technology}></TechnologyPill>
          ))}
        </div>
        <div>
          <span className={styles.label}>Category: </span>
          <span>{category}</span>
        </div>
        <div>
          <a href={learnMore} >Check it out</a>
        </div>
      </div>
    </div>
  )
}

ExperienceCard.propTypes = {
  data: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired
}

export default ExperienceCard
