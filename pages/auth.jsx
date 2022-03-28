import { useState, useEffect } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

export default function AuthPage(props) {
  const [mode, setMode] = useState(true);

  return (
    <div className="flex bg-stone-700 h-screen w-screen justify-center items-center">
      <main className="flex border rounded-md border-stone-300 w-96">
        {mode ? (
          <Login setMode={() => setMode(false)} />
        ) : (
          <Signup setMode={() => setMode(true)} />
        )}
      </main>
    </div>
  );
}
