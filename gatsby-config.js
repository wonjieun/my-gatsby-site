module.exports = {
  siteMetadata: {
    siteUrl: 'https://meblog.gatsbyjs.io',
    title: 'Jina❤️',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem', // @see https://www.gatsbyjs.com/docs/how-to/sourcing-data/
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
};
