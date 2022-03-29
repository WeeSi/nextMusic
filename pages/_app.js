import React, { useEffect } from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import darkTheme from '../styles/theme/darkTheme';
import '../styles/globals.css';
import MiniDrawer from '../components/drawer';
import Router from 'next/router'
import AuthPage from "./auth";

const clientSideEmotionCache = createEmotionCache();


const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    if(!props.token){
      Router.push('auth')
    }
  }, []);

  if(!props.token){
    return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <AuthPage />
        </ThemeProvider>
      </CacheProvider>
    );
  }

   return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
       <MiniDrawer><div className=" pt-4 pl-20 ml-6"><Component {...pageProps} /></div></MiniDrawer>  
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
