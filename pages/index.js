// import Head from 'next/head'
// import Image from 'next/image'
import MiniDrawer from '../utility/drawer';
import AuthPage from './auth';
import HomePlayer from './home';
// import styles from '../styles/Home.module.css'

function Index(props) {
  if(!props.token){
    return <AuthPage {...props} />;
  }

  return <HomePlayer {...props} />
}

export default Index;