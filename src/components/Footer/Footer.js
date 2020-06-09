import { withPrefix } from "gatsby"
import React from "react"
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin, FaRss } from "react-icons/fa"
import config from "../../config"

import styles from "./Footer.module.scss"

export const Footer = () => {
  const iconNames = [FaEnvelope, FaLinkedin, FaGithub, FaFileAlt, FaRss]
  return (
    <footer>
      <span className={styles.colophon}>
        © {new Date().getFullYear()} Created by {config.name}
      </span>
      <ul>
        {config.footer.map(({ name, url }, i) => {
          const Icon = iconNames[i]
          const prefixedUrl =
            name === ("Resume" || "RSS Feed") ? withPrefix(url) : url
          return (
            <li key={i}>
              <a
                href={prefixedUrl}
                aria-label={name}
                title={name}
                rel="external noopener noreferrer"
              >
                <Icon />
              </a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
