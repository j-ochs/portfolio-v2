import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hey, I'm Jacob.</h2>
    <div style={{
      display: `flex`
    }}>
      <p>I'm a software engineer based in Santa Barbara, California. <br/>When I'm not coding, I enjoy playing beach volleyball and
          building things out of wood.</p>
      <div
        style={{
          maxWidth: `250px`,
          minWidth: `33%`,
          marginBottom: `1.45rem`,
          borderRadius: `.5rem`
        }}
      >
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
