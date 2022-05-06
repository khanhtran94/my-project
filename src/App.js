import './App.css';
import React, { useEffect, useState } from "react";


const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(()=>{
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);

  }, []);
}


function WordCount({children=""}) {
  useAnyKeyToRender();
  const words = children.split("");

  useEffect(() => {
    console.log("fress render");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
  
}
function App() {

  return <WordCount>You are not going to believe this but...</WordCount>;

}

export default App;
