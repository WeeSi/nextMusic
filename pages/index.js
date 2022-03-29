// import Head from 'next/head'
// import Image from 'next/image'
import MiniDrawer from '../utility/drawer';
import AuthPage from '../components/auth/auth';
import HomePlayer from './home';
import { Context } from '../context';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
// import styles from '../styles/Home.module.css'

function Index(props) {
  const {state,dispatch} = useContext(Context);
  
  if(!state.logged){
    return <AuthPage {...props} />;
  }

  return <></>
}

export default Index;