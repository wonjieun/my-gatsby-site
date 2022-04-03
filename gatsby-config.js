module.exports = {
  siteMetadata: {
    title: 'Jina❤️',
    siteUrl: 'https://meblog.gatsbyjs.io',
    description: '안녕하세요. 원지은 입니다.',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem', // @see https://www.gatsbyjs.com/docs/how-to/sourcing-data/
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
};
