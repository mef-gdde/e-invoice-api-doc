const withNextra = require('nextra')({
  output: 'standalone', // https://nextjs.org/docs/app/api-reference/next-config-js/output#automatically-copying-traced-files
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
  })
  
   
  module.exports = withNextra()