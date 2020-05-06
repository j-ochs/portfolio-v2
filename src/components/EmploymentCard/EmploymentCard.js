import React from "react"
import PropTypes from "prop-types"

import styles from "./EmploymentCard.module.scss"

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
      <span>{duration}</span>
      {description.map((line, i) => (
        <span key={i}>{line}</span>
      ))}
      {techStack.map((tech, i) => (
        <span key={i}>{tech}</span>
      ))}
    </div>
  )
}

EmploymentCard.propTypes = {
  data: PropTypes.object,
}

export default EmploymentCard
