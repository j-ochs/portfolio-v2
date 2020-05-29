import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"
import "../styles/styles.scss"
import { Footer } from "./Footer/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        position: `relative`,
        minHeight: `100vh`
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <p 
        style={{
          textAlign: `center`,
          background: `darkred`,
          color: `white`,
          lineHeight: `1.5rem`,
          marginTop: `-1.5rem`,
          minWidth: `100%`
        }}>This website is currently under construction (last updated May 2020)</p>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
