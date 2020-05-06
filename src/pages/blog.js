import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Hello! Welcome to my blog</h1>
    <p>
      Welp, looks like I haven't written anything yet... Check back soon, I'm
      sure I'll get over my writer's block eventally!
    </p>
    <Link to="/">Back to homepage</Link>
  </Layout>
)

export default BlogPage
