import React from "react"
import { StaticQuery, graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExperienceCard from "../components/ExperienceCard/ExperienceCard"

import { projects } from "../../content/experience"

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
      }
    `} render={(data) => {
      return (
      <Layout>
        {projects.map((projectData, i) => (
          <div key={i}>
            <ExperienceCard data={projectData} image={Object.values(data)[i]}></ExperienceCard>
            <hr />
          </div>
        ))}
        <span>See
          <a
              href="/resume.pdf"
              aria-label="Resume"
              title="Resume"
              rel="external noopener noreferrer"
            > my resume </a>
            for an in-depth look at my skills and employment experience.
        </span>
      </Layout>
    )
    }}
  />
)

export default ExperiencePage
