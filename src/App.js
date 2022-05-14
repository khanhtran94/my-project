import React, { useState, lazy, Suspense } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import ColorProvider, { useColors } from "./ColorProvider";
import ColorList from "./ColorList";
import AddColorFrom from "./AddColorForm";
import { Whoops404 } from "./Pages";
export function ColorDetails({ title, color, history, location }) {
  let {id} = useParams();
  console.log(id);
  let {colors} = useColors();

  let foundColor = colors.find(
    color => color.id === id
  );
  console.log(foundColor);

  return (
    (!color) ?
    <Whoops404 location={location}/> :
    <div className="color-details"
         style={{backgroundColor: color}}
         onClick={() => history.goBack()}>
        <h1>{title}</h1>
        <h1>{color}</h1>
    </div>
  );
}

export default function App() {
  return (
    <ColorProvider>
      <AddColorFrom />

      <Routes>
        <Route
          path="/"
          element={<ColorList />}

        />
        <Route
          path=":id"
          element={<ColorDetails />}
        />
      </Routes>
    </ColorProvider>
  );
}
