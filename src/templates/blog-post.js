import React from "react"
import { graphql } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"

import config from "../config"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/Article/Article"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  // const { previous, next } = pageContext
  const { date, description, imageAlt, imageSrc, keywords, title } = post.frontmatter
  const disqusConfig = {
    url: `${config.siteUrl + location.pathname}`,
    identifier: post.id,
    title: post.title
  }
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={title} description={description || post.excerpt} keywords={keywords}/>
      <Article post={post} date={date} imageAlt={imageAlt} imageSrc={imageSrc} keywords={keywords} title={title} />
      <Disqus config={disqusConfig} />
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
        imageAlt
        imageSrc
        keywords
      }
    }
  }
`
