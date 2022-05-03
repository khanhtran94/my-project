import './App.css';
import React, { useEffect, useState } from "react";
import Checkbox from './componets/Checkbox';

function App() {
  const [val, set] = useState("");
  const [phrase, setPharse] = useState("init phase");

  const createPhrase = () => {
    set("");
    setPharse(val);
  }

  useEffect(() => {
  console.log(`typep "${val}"`)
  });

  useEffect(() => {
    console.log(`saved pharse "${phrase}"`)
  });

  return (
    <React.StrictMode>
     <label>Favorite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={e => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </React.StrictMode>

  );
}

export default App;
