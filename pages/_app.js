import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/themes/lightTheme';
import '../styles/globals.css';
const clientSideEmotionCache = createEmotionCache();
import { Router } from 'next/dist/client/router'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import LoadingM8 from '../src/components/LoadingM8';
import { useState } from 'react';
import { useEffect } from 'react';



const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  Router.events.on('routeChangeStart', () => {
    // NProgress.start()
    setLoading(true)
  })
  Router.events.on('routeChangeComplete',async () => {
   
    setLoading(false)
  })
  Router.events.on('routeChangeError', () => {
    // NProgress.done()
    setLoading(false)
  })
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        {loading && <LoadingM8 loading={loading}/>}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};