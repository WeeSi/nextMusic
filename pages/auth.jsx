import { useState } from "react";
import { SvgBtn } from "../components/button";

export default function AuthPage() {
  const [mode, setMode] = useState(false);

  return (
    <div className="flex bg-stone-700 h-screen w-screen justify-center items-center">
      <main className="flex border rounded-sm border-stone-300">
        {/* {mode ? <Login /> : <Signup />} //!Import customComponent */}
        <SvgBtn action={setMode} svg="true" />
      </main>
    </div>
  );
}
