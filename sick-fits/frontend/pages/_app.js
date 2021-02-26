/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import '../components/styles/nprogress.css';
import Layout from '../components/Layout';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
