import './App.css';
import React, { useState } from "react";
import colorData from './data/color-data.json';
import ColorList from './componets/ColorList';

function App() {
  const [colors] = useState(colorData)
  return (
    <ColorList colors={colors} />
  );
}

export default App;
