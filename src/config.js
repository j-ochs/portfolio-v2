module.exports = {
  siteTitle: 'Jacob Ochs',
  siteDescription:
    'Jacob Ochs is a software engineer based in Santa Barbara, CA. This personal portfolio webpage seeks to highlight his software development experience.',
  siteKeywords:
    'Jacob Ochs, Jacob, Ochs, jaochs7, software engineer, fullstack engineer, front-end engineer, web developer, javascript, santa barbara',
  siteUrl: 'https://jochs.netlify.app',
  siteLanguage: 'en_US',
  name: 'Jacob Ochs',
  location: 'Santa Barbara, CA',
  email: 'jaochs7@gmail.com',
  github: 'https://github.com/j-ochs',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/j-ochs',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jacobochs',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bchiang7',
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
