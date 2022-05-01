import './App.css';
import React, { useState } from "react";
import colorData from './data/color-data.json';
import ColorList from './componets/ColorList';
import AddColorForm from './componets/AddColorForm'
import { v4 } from "uuid";

function App() {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>

  );
}

export default App;
