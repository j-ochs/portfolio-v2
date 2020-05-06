import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EmploymentCard from "../components/EmploymentCard/EmploymentCard"

const experienceData = [
  {
    company: "LogMeIn",
    companyLink: "https://www.logmeininc.com",
    description: [
      "worked on GoToConnect and other cool projects",
      "did other cool stuff too"
    ],
    duration: "June 2018 - April 2020",
    title: "Software Development Engineer",
    techStack: ["Typescript", "Electron", "React", "Angular"]
  },
  {
    company: "Westmont College",
    companyLink: "https://www.westmont.edu",
    description: ["attsn things",],
    duration: "August 2017 - May 2018",
    title: "Linux Network Administrator",
    techStack: ["Linux", "Bash", "Shell"]
  },
  {
    company: "Esri",
    companyLink: "https://www.esri.com/en-us/home",
    description: ["etc",],
    duration: "May 2017 - August 2017",
    title: "Web App Developer - Intern",
    techStack: ["Javascript", "Angular", "Node.js"]
  }
]

const ExperiencePage = () => (
  <Layout>
    <SEO title="Experience" />
    <h1>Where I've worked</h1>
    {experienceData.map((data, i) => (
      <EmploymentCard key={i} data={data}></EmploymentCard>
    ))}
  </Layout>
)

export default ExperiencePage
