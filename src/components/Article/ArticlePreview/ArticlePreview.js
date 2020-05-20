import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import TechnologyPill from "../../ExperienceCard/TechnologyPill/TechnologyPill"
import styles from "./ArticlePreview.module.scss"

const ArticlePreview = ({ date, description, keywords, title, slug }) => (
  <div className={styles.card}>
    <Link to={slug}>
      <article className={styles.article} key={slug}>
        <header className={styles.postHeader}>
          <h3>{title}</h3>
          <small>{date}</small>
          <div className={styles.pillContainer}>
            {keywords.map((keyword, j) => (
              <TechnologyPill technology={keyword} key={j} />
            ))}
          </div>
        </header>
        <section>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </section>
      </article>
    </Link>
  </div>
)

ArticlePreview.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.array,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired 
}

export default ArticlePreview
