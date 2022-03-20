module.exports = {
  siteMetadata: {
    siteUrl: "https://meblog.gatsbyjs.io",
    title: "Jina❤️",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
