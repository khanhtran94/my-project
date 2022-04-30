import './App.css';
import React, { useState } from "react";
import colorData from './data/color-data.json';
import ColorList from './componets/ColorList';
import AddColorForm from './componets/AddColorForm'
function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => alert(`TODO: Create ${title} - ${color}`)}
      />
      <ColorList
        colors={colors}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color => color.id === id ? { ...color, rating } : color)
          setColors(newColors);
        }}
      />
    </>

  );
}

export default App;
