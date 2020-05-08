import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hi people</h2>
    <p>I'm a software engineer based in Santa Barbara, California.</p>
    <div>
      <span>I have cool skillz</span>
    </div>
    <div>
      <span>
        When I'm not coding, I enjoy beach volleyball, surfing, and building
        things out of wood.
      </span>
    </div>
    <div style={{ maxWidth: `250px`, marginBottom: `1.45rem`, borderRadius: `.5rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
