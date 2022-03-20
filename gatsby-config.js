module.exports = {
  siteMetadata: {
    siteUrl: "https://meblog.gatsbyjs.io",
    title: "Jina❤️",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
