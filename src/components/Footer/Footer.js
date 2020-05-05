import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import config from '../../config'

import styles from './Footer.module.scss'

export const Footer = () => {
  
  const { social } = config;
  console.log('styles', styles);
  return (
    <footer>
      <span className={styles.colophon}>© {new Date().getFullYear()} Created by {config.name}</span>
      <ul>
        <li>
          <a href={social[0].url} 
            aria-label={social[0].name}
            target="_blank"
            rel="external noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href={social[1].url}
            alt={social[1].name}
            target="_blank"
            rel="external noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={social[2].url}
            alt={social[2].name}
            target="_blank"
            rel="external noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  )
}
