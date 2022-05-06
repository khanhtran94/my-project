import './App.css';
import React, { useEffect, useState } from "react";


const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(()=>{
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);

  }, []);
}
function App() {
  useAnyKeyToRender();

  const word = ["gnar", "123"];

  useEffect(() => {
    console.log("fresh render");
  }, [word]);
  return (
    <h1>Open the console</h1>

  );
}

export default App;
