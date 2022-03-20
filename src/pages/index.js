import * as React from 'react';
import { Link } from 'gatsby';

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

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Jina
        <br />
        <span style={headingAccentStyles}>— a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉
        </span>
      </h1>
      <Link to="/dew">이슬이네</Link>
    </main>
  );
};

export default IndexPage;
