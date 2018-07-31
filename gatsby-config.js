module.exports = {
  siteMetadata: {
    title: 'Aperture Design System',
  },
  plugins: [`gatsby-plugin-react-helmet`,
            `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
