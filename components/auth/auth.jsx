import { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function AuthPage(props) {
  const [mode, setMode] = useState(true);

  return (
    <div className="flex bg-stone-700 h-screen w-screen justify-center items-center">
      {mode ? (
        <Login setMode={() => setMode(false)} />
      ) : (
        <Signup setMode={() => setMode(true)} />
      )}
    </div>
  );
}
