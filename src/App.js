import './App.css';
import React, { useState } from "react";
import colorData from './data/color-data.json';
import ColorList from './componets/ColorList';
import AddColorForm from './componets/AddColorForm'
import { v4 } from "uuid";

function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
              {
                id: v4(),
                rating: 0,
                title: title,
                color: color
              }
            
          ];
          setColors(color);
        }}
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
