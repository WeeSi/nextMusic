import AuthPage from '../components/auth/auth';

import { Context } from '../context';
import { useContext, useEffect } from 'react';
import HomePlayer from './home';

function Index(props) {
  const {state,dispatch} = useContext(Context);
  
  if(!state.logged){
    return <AuthPage {...props} />;
  }

  return <HomePlayer />
}

export default Index;