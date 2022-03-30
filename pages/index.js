import AuthPage from '../components/auth/auth';
import HomePlayer
 from './home';
import { Context } from '../context';
import { useContext, useEffect } from 'react';

function Index(props) {
  const {state,dispatch} = useContext(Context);
  
  if(!state.logged){
    return <AuthPage {...props} />;
  }

  return <HomePlayer></HomePlayer>
}

export default Index;