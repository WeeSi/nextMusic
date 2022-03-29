import React, { useContext, useEffect, useState } from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import MiniDrawer from '../components/drawer';
import { Context, Provider } from "../context";

const clientSideEmotionCache = createEmotionCache();


const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

   return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Provider>
          <MiniDrawer>
              <Component {...pageProps} />
          </MiniDrawer>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
