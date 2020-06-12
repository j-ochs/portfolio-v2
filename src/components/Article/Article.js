import React from "react"
import PropTypes from "prop-types"

import KeywordPill from "../KeywordPill/KeywordPill"
import styles from "./Article.module.scss"
import DynamicImage from "../dynamic-image"

const Article = ({ post, date, imageAlt, imageSrc, keywords, title }) => (
  <article>
    <header>
      <h1>{title}</h1>
      <span className={styles.headerMeta}>Article by Jacob Ochs posted on <time dateTime={date} itemProp="datePubished">{date}</time></span>
      <div className={styles.keywordContainer}>
        <span className={styles.headerMeta}>Topics: </span>
        {keywords.map((keyword, i) => (
          <KeywordPill keyword={keyword} key={i} />
        ))}
      </div>
    </header>
    <DynamicImage
      alt={imageAlt}
      className={styles.headerImage}
      imgsrc={imageSrc}
    />
    <section dangerouslySetInnerHTML={{ __html: post.html }} />
    <hr />
  </article>
)


Article.propTypes = {
  date: PropTypes.string.isRequired,
  keywords: PropTypes.array,
  title: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  previous: PropTypes.object,
  next: PropTypes.object,
}

export default Article
