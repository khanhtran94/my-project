import './App.css';
import React, { useEffect, useState } from "react";


const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(()=>{
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);

  }, []);
}
const word = ["gnar", "123"];


function App() {
  useAnyKeyToRender();


  useEffect(() => {
    console.log("fresh render");
  }, [word]);
  return (
    <h1>Open the console</h1>

  );
}

export default App;
