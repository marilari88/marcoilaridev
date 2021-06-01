module.exports = {
  siteMetadata: {
    title: `Marco Ilari`,
    subTitle: `Fullstack Developer`,
    description: `I miei progetti, i miei appunti e contatti`,
    email: `marilari88@gmail.com`,
    author: `@marcoilari.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        typeName: `projectJson`,
        path: `${__dirname}/data/projects.json`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `marcoilari-dev`,
        short_name: `marcoilaridev`,
        start_url: `/`,
        background_color: `#264653`,
        theme_color: `#2a9d8f`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
