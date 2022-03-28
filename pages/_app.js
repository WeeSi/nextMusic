import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

//* bendahmanem
//* mounir.bendahmane@ecole-isitech.fr
//* groupe 3: Raturat, Spedalotto, Ehui, Brossette

//! Full hook
//! Documentation personnelle sur les notions découvertes cette semaine
//! Documentation du projet
//! Organisation du projet 'Feature based'
//! Au minimun un petit workflow git présenté brièvement

//! Des appels API...
//! Des sideEffects ...
//! Un Store, React Router, un hook custom*, composant réutilisables, esthétique

//! Nextjs Heroku githubActions
//! Auth avec store router et guard

//? const myObject = {
//?   one: 1,
//?   str: "string",
//?   arr: [1, 2, 3, 4],
//?   myfn: () => {
//?     console.log("hello world");
//?   },
//? };

//? const { toto } = myObject //
//? const { name, age } = await userService.getUser() //

//? const [one, two, three] = myArray // Défini les clés

//? const {price, ...rest} =  Accés au prio blabla tu coné le 100
