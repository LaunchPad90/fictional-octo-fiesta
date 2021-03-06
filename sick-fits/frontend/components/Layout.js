import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika-next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    font-weight: normal;
    font-style: normal;
  }
  :root {
      --red: #ff0000;
      --black: #393939;
      --grey: #3a3a3a;
      --light-grey: #e1e1e1;
      --off-white: #ededed;
      --max-width: 1000px;
      --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
  } 
  html {
    box-sizing: border-box;
    *, *:before, *:after {
      box-sizing: inherit;
    }
  }
  body {
    font-family: 'radnika_next', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;

  }
  a {
    text-decoration: none;
    color: var(--black);

    :hover {
      text-decoration: underline;
    }
  }
  button {
    font-family: 'radnika_next', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
`;

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </>
  );
}
