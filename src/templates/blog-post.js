import React from "react"
import { graphql } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"

import config from "../config"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/Article/Article"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const disqusConfig = {
    url: `${config.siteUrl + location.pathname}`,
    identifier: post.id,
    title: post.title
  }
  const { date, description, keywords, title } = post.frontmatter
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={title} description={description || post.excerpt} />
      <Article post={post} date={date} keywords={keywords} title={title} previous={previous} next={next} />
      <Disqus config={disqusConfig} style={{ marginBottom: `4em`, firstChild: { minHeight: `325px !important`, background: `purple` } }} />
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
