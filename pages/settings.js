import { useContext, useState } from "react";
import { Context } from "../context";

const Settings = () => {
  
  const { state, dispatch } = useContext(Context);
  
  const toggleTheme = () => {
    localStorage.darkMode = !state.darkMode;
    if(!state.darkMode)
      document.getElementsByTagName('body')[0].classList.add('dark')
    else 
      document.getElementsByTagName('body')[0].classList.remove('dark')

    dispatch({type:'CHANGE_DARK',payload:!state.darkMode})
  }

  return (
    <div>Settings
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default Settings;