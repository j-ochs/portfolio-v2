import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

/*
 * This component is built using `gatsby-image` to serve optimized
 * images with lazy loading and reduced file sizes, dynamically returned
 * via string pattern matching from the imgsrc string prop.
 * 
 * Note: Because this component will query for every image in `src/images`, to increase performance
 * only use this component where dynamic images are necessary (ie a reusable component like <Article />).
 * Adapted from: https://github.com/gatsbyjs/gatsby/issues/2293#issuecomment-452460620
 */

export default class DynamicImage extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 1600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <Img
              alt={this.props.alt}
              className={this.props.className || ""}
              fluid={data.allImageSharp.edges.find((element) => {
                // Match string after final slash
                return (element.node.fluid.src.split('/').pop() === this.props.imgsrc);
              }).node.fluid}
            />
          )
        }}
      />
    )
  }
}

DynamicImage.propTypes = {
  imgAlt: PropTypes.string,
  imgsrc: PropTypes.string.isRequired,
  className: PropTypes.string
}