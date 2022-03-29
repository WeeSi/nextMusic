import React, { useContext, useEffect, useState } from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from '../utility/createEmotionCache';
import '../styles/globals.scss';
import MiniDrawer from '../components/drawer';
import { Context, Provider } from "../context";

const clientSideEmotionCache = createEmotionCache();


const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

   return (
    <CacheProvider value={emotionCache}>
        <CssBaseline />
        <Provider>
          <MiniDrawer>
              <Component {...pageProps} />
          </MiniDrawer>
        </Provider>
    </CacheProvider>
  );
};

export default MyApp;
