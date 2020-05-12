import React from "react"
import PropTypes from "prop-types"

import styles from "./ExperienceCard.module.scss"
import TechnologyPill from "./TechnologyPill/TechnologyPill";

const ExperienceCard = ({ data }) => {
  const { company, companyLink, title, description, duration, techStack } = data;
  return (
    <div className={styles.card}>
      <h4>
        {title} @
        <a
          href={companyLink}
          target="_blank"
          rel="external noopener noreferrer"
        >
          {company}
        </a>
      </h4>
      <span className={styles.label}>{duration}</span>
      <div>
        <ul>
          {description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
      <div className={styles.pillContainer}>
        <span className={styles.label}>Tech Stack:</span>
        {techStack.map((technology, i) => (
          <TechnologyPill key={i} technology={technology}></TechnologyPill>
        ))}
      </div>
    </div>
  )
}

ExperienceCard.propTypes = {
  data: PropTypes.object,
}

export default ExperienceCard
