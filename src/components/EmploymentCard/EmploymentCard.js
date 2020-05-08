import React from "react"
import PropTypes from "prop-types"

import styles from "./EmploymentCard.module.scss"
import TechnologyPill from "./TechnologyPill/TechnologyPill";

const EmploymentCard = ({ data }) => {
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
      <div className={styles.label}>{duration}</div>
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

EmploymentCard.propTypes = {
  data: PropTypes.object,
}

export default EmploymentCard
