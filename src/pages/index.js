import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>I'm a software engineer based in sunny Santa Barbara, California.</p>
    <div>
      <span>I have cool skillz</span>
    </div>
    <div>
      <span>
        When I'm not coding, I enjoy beach volleyball, surfing, and building
        things out of wood.
      </span>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
