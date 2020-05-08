import { withPrefix } from 'gatsby'
import React from "react"
import { FaEnvelope, FaGithub, FaLinkedin, FaFile } from "react-icons/fa"
import config from "../../config"

import styles from "./Footer.module.scss"


export const Footer = () => {
  const iconNames = [FaEnvelope, FaLinkedin, FaGithub, FaFile]
  return (
    <footer>
      <span className={styles.colophon}>
        © {new Date().getFullYear()} Created by {config.name}
      </span>
      <ul>
        {config.contact.map((resource, i) => {
          const IconName = iconNames[i]
          return (
            <li key={i}>
              <a
                href={withPrefix(resource.url)}
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
