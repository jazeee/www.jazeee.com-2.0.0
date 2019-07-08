module.exports = {
  siteMetadata: {
    title: `Jaz Singh`,
    description: `Jaz Singh: a software engineer and technical lead. I work with React, ES6+, Meteor, Java, PostgreSQL, MySQL, Arduino, ESP8266 among other things.`,
    author: `@jazeee`,
    keywords: `jazeee Jaz Software Engineer React ES6 JavaScript PostgreSQL MySQL Mongo Meteor Java c++`,
    url: "http://www.jazeee.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
