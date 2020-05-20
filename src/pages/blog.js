import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlePreview from "../components/Article/ArticlePreview/ArticlePreview";

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Blog" />
      {posts.map(({ node }, i) => {
        const { date, description, keywords, title } = node.frontmatter
        return (
          <div key={i}>
            <ArticlePreview date={date} description={description} keywords={keywords} title={title} slug={node.fields.slug} />
            <hr />
          </div>
        )
      })}
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
