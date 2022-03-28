import { useState } from "react";
import Login from "../components/auth/Login";
import { SvgBtn } from "../components/button";

export default function AuthPage(props) {
  const [mode, setMode] = useState(true);

  return (
    <div className="flex bg-stone-700 h-screen w-screen justify-center items-center">
      <main className="flex">
        {mode ? <Login/> : null} 
        {/* <SvgBtn action={setMode} svg="true" /> */}
      </main>
    </div>
  );
}
