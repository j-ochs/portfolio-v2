import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TechnologyPill from "../components/ExperienceCard/TechnologyPill/TechnologyPill"

import styles from "./blog.module.scss"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  console.log("posts", posts)
  return (
    <Layout>
      <SEO title="Blog" />
      <h2>Hello! Welcome to my blog</h2>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header className={styles.myheader}>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <div>
                {node.frontmatter.keywords.map((keyword, i) => (
                  <TechnologyPill technology={keyword} key={i} />
                ))}
              </div>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt
                }}
              />
            </section>
          </article>
        )
      })}
      <Link to="/">Back to homepage</Link>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            keywords
          }
        }
      }
    }
  }
`
