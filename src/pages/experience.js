import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExperienceCard from "../components/ExperienceCard/ExperienceCard"

import { experience } from "../../content/experience"

const ExperiencePage = () =>  (
  <Layout>
    <SEO title="Experience" />
    <h2>Where I've worked</h2>
    {experience.map((data, i) => (
      <ExperienceCard key={i} data={data}></ExperienceCard>
    ))}
  </Layout>
)

export default ExperiencePage
