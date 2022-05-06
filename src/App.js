import './App.css';
import React, { useEffect, useMemo, useState } from "react";


const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(()=>{
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);

  }, []);
}


function WordCount({children=""}) {
  useAnyKeyToRender();
  const words = useMemo(() => {
    const works = children.split(" ");
    return works;
  },[children]);

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
