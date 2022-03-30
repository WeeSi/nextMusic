import { useEffect, useState } from "react";

function UseIsLogged() {
    const [logged, setlogged] = useState(false);
    useEffect(() => {
        if(localStorage.user){
            setlogged(true)
          }else{
            setlogged(false);
          }
    });
  
    return logged;
  }

  export default UseIsLogged;