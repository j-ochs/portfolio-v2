import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import TechnologyPill from "../ExperienceCard/TechnologyPill/TechnologyPill"
import styles from "./Article.module.scss"

const Article = ({ post, date, keywords, title, previous, next }) => {
  return (
    <>
      <article>
        <header className={styles.myheader}>
          <h1>{title}</h1>
          <span className={styles.metaDate}>Article posted on {date}</span>
          <div className={styles.keywordContainer}>
            {keywords.map((keyword, i) => (
              <TechnologyPill technology={keyword} key={i} />
            ))}
          </div>
        </header>
        <hr />
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer></footer>
      </article>

      <nav>
        <ul className={styles.bottomNav}>
          <li className={styles.navLink}>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li className={styles.navLink}>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  )
}

Article.propTypes = {
  date: PropTypes.string.isRequired,
  keywords: PropTypes.array,
  title: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  previous: PropTypes.object,
  next: PropTypes.object,
}

export default Article
