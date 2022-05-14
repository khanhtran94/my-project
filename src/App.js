import React, { useState, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ColorProvider from "./ColorProvider";
import ColorList from "./ColorList";
import AddColorFrom from "./AddColorForm";

export function ColorDetails() {
  return (
    <div>
      <h1>Details</h1>
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
