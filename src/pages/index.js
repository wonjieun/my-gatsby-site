import * as React from 'react';
import { Link, graphql } from 'gatsby';
import '../index.scss';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};

const IndexPage = ({ data }) => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Jina
        <br />
        <span style={headingAccentStyles}>— a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉
        </span>
      </h1>
      <p>{data.site.siteMetadata.description}</p>
      <Link to="/dew">이슬이네</Link>
    </main>
  );
};

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default IndexPage;