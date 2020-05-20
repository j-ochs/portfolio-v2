import React from "react"
import { Link, graphql } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"

import config from "../config"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TechnologyPill from "../components/ExperienceCard/TechnologyPill/TechnologyPill"


import styles from "./blog-post.module.scss"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const disqusConfig = {
    url: `${config.siteUrl + location.pathname}`,
    identifier: post.id,
    title: post.title
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header className={styles.myheader}>
          <h1>{post.frontmatter.title}</h1>
          <span className={styles.metaDate}>Article posted on {post.frontmatter.date}</span>
          <div className={styles.keywordContainer}>
            {post.frontmatter.keywords.map((keyword, i) => (
              <TechnologyPill technology={keyword} key={i} />
            ))}
          </div>
        </header>
        <hr/>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
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
      <Disqus className={styles.disqus} config={disqusConfig} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        keywords
      }
    }
  }
`
