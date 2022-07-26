/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
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
import  Head  from 'next/head';
import Home from './index';
import { HomeProvider } from '../src/context/HomeProvider';
import Products from './products/index';
import Packages from './packages/index';
import { PackageProvider } from '../src/context/PackageProvider';
import { ProductProvider } from '../src/context/ProductProvider';
import SignUp from './signup';
import { SignupProvider } from '../src/context/SignupProvider';
import SignIn from './signin';
import { SignInProvider } from '../src/context/SigninProvider';

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    // Remove the server-side injected CSS.
    sleep(1000)
    setLoading(false)
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
  const renderComponent=()=>{
    switch(Component){
      case Home: 
        return <HomeProvider><Component {...pageProps} /></HomeProvider>
      case Products:
        return <ProductProvider><Component {...pageProps} /></ProductProvider>
      case Packages:
        return <PackageProvider><Component {...pageProps} /></PackageProvider>
      case SignUp:
        return <SignupProvider><Component {...pageProps} /></SignupProvider>
        case SignIn:
          return <SignInProvider><Component {...pageProps} /></SignInProvider>
      default:
        return <Component {...pageProps} />
    }
  }
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        {loading && <LoadingM8 loading={loading}/>}
        <Head>
            <meta httpEquiv='Content-Type' content='text/html; charset=utf-8'/>
            <meta name="viewport" content='width=device-width, initial-scale=1'/>
        </Head>
        <CssBaseline />
       {renderComponent()}
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