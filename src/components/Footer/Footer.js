import { withPrefix } from "gatsby"
import React from "react"
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"
import config from "../../config"

import styles from "./Footer.module.scss"

export const Footer = () => {
  const iconNames = [FaEnvelope, FaLinkedin, FaGithub, FaFileAlt]
  return (
    <footer>
      <span className={styles.colophon}>
        © {new Date().getFullYear()} Created by {config.name}
      </span>
      <ul>
        {config.contact.map((resource, i) => {
          const IconName = iconNames[i]
          const url =
            resource.name === "Resume" ? withPrefix(resource.url) : resource.url
          return (
            <li key={i}>
              <a
                href={url}
                aria-label={resource.name}
                target="_blank"
                title={resource.name}
                rel="external noopener noreferrer"
              >
                <IconName />
              </a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
