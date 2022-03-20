import * as React from 'react';
import politeDew from '../images/polite-dew.jpg';

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

const DewPage = () => {
  return (
    <main style={pageStyles}>
      <title>Dew Page</title>
      <h1 style={headingStyles}>이슬이네</h1>
      <p align="center">
        <img alt="이슬" src={politeDew} width="500" />
      </p>
      <h2 align="center">어서오세요 🙇🏻‍♀️</h2>
    </main>
  );
};

export default DewPage;
