import React from "react"
import { StaticQuery, graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkItem from "../components/WorkItem/WorkItem"

import { projects } from "../../content/work"

const ExperiencePage = () => (
  <StaticQuery query={graphql`
      {
        goToConnect: file(relativePath: {eq: "gotoconnect.png"}) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        goToStage: file(relativePath: {eq: "gotostage.png"}) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        firesim: file(relativePath: {eq: "firesim.png"}) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        plusOne: file(relativePath: {eq: "plus-one.png"}) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `} render={(data) => {
      return (
      <Layout>
        <SEO title="Work" />
        {projects.map((projectData, i) => (
          <div key={i}>
            <WorkItem data={projectData} image={Object.values(data)[i]}></WorkItem>
            <hr />
          </div>
        ))}
        <p style={{
          textAlign: `center`
        }}>See my <a
            href="/resume.pdf"
            aria-label="Resume"
            title="Resume"
            rel="external noopener noreferrer"
          >resume</a> for a closer look at my skills and employment experience.
        </p>
      </Layout>
    )
    }}
  />
)

export default ExperiencePage
