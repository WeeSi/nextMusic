import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import MiniDrawer from '../utility/drawer';

const clientSideEmotionCache = createEmotionCache();


const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {props.token &&  <MiniDrawer><Component {...pageProps} /></MiniDrawer>  }
        {!props.token && <Component {...pageProps} />}
     
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
