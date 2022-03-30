import { useContext, useState } from "react";
import { Context } from "../context";

const Settings = () => {
  
  const { state, dispatch } = useContext(Context);
  
  const toggleTheme = () => {
    dispatch({type:'CHANGE_DARK',payload:!state.darkMode})
  }

  return (
    <div>Settings
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default Settings;