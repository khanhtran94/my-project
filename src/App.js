import './App.css';
import React, { useEffect, useLayoutEffect, useMemo, useReducer, useState } from "react";


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
  
};
function Checkbox(params) {
  const [checked, toggle] = useReducer(checked => !checked, false);
 

  return(
    <>
      <input 

        type={"checkbox"}
        value={checked}
        onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}
function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return [width, height];
};
function useMousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setPosition = ({ x, y }) => {
    setX(x);
    setY(y);
  };

  useLayoutEffect(() => {
    window.addEventListener("mousemove", setPosition);
    return () => window.removeEventListener("mousemove", setPosition);
  }, []);

  return [x, y];
};
function App() {

  return (
    <Checkbox />
  );

}

export default App;
