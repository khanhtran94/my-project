import React, { useReducer, useState, memo, useEffect } from "react";

function GitHubUser({login}) {
  const [data, setData] = useState();

  useEffect(() => {
    if (!login) {
      return;
    }

    fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.log)
  }, [login]);

  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>
  }

  return null;
  
}
export default function App() {

  return (
    <>
    <GitHubUser login={"moonhighway"} />
     
    </>
  );
}
