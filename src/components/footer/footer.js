import React from 'react';
import config from '../../config';

import './footer.scss';

export const Footer = () => {
  
  return (
    <footer>
      <a className="sitemap" href="/sitemap.xml">footer sitemap!</a>
          © {new Date().getFullYear()} Created by {config.name}
          {` `}
          {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
    // <footer className="footer">
    //   <div className="container">
    //     <p className="sitemap">footer sitemap!</p>
    //     <p className="colophon">© {new Date().getFullYear()}, Built with</p>
    //   </div>
    // </footer>
  )
}
