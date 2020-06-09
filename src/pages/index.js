import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jacob-ochs-tux.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Hey, I'm Jacob.</h2>
      <section style={{
        display: `flex`
      }}>
        <p>I'm a software engineer based in Santa Barbara, California. <br/>When I'm not coding, I enjoy playing beach volleyball and
            building things out of wood.
        </p>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt={"Profile photo of Jacob Ochs looking dapper in a tuxedo"}
          style={{
            maxWidth: `250px`,
            minWidth: `33%`,
            marginBottom: `1.45rem`,
            borderRadius: `.5rem`
          }}
        />
      </section>
    </Layout>
  )
}

export default IndexPage
