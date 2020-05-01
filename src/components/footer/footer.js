import React from 'react';
import config from '../../config';

import './footer.scss';

export const Footer = () => {
  
  return (
    <footer>
      <p className="sitemap">footer sitemap!</p>
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
