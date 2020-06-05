import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaTimesCircle } from "react-icons/fa"

import Header from "./Header/Header"
import "../styles/styles.scss"
import { Footer } from "./Footer/Footer"
import { ClientOnly } from "./client-only"

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
  const bannerClosed = localStorage.getItem('bannerClosed')
  const bannerClicked = () => {
    const banner = document.getElementById("banner")
    if (banner) {
      banner.style.opacity = '0'
      setTimeout(() => {
        localStorage.setItem('bannerClosed', true)
        banner.parentNode.removeChild(banner)
      }, 1000)
    }
  }

  return (
    <div
      style={{
        position: `relative`,
        minHeight: `100vh`
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <ClientOnly>
        {!bannerClosed && (
        <p 
          id="banner"
          style={{
            background: `darkred`,
            color: `white`,
            lineHeight: `1.5rem`,
            marginTop: `-1.5rem`,
            minWidth: `100%`,
            opacity: `inherit`,
            transition: `1s`,
            justifyContent: `center`,
            display: `flex`,
            position: `relative`,
          }}>This website is currently under construction (last updated June 2020)
            <FaTimesCircle style={{
              margin: `2px`,
              cursor: `pointer`,
              position: `absolute`,
              right: `0`
            }}
            onClick={bannerClicked}/>
          </p>
        )}
      </ClientOnly>
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
