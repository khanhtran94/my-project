import React, { useState, lazy, Suspense } from "react";
import { GridLoader } from "react-spinners";
import Agreement from "./componets/Agreement";
import ErrorBoundary from "./componets/ErrorBoundary";
import Pages from "./componets/Pages";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Products,
  Contact
} from './componets/Pages'
export default function App() {
  

  return (
    <Suspense fallback={<GridLoader />}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />

          <Route path="/products" element={<Products />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </Suspense>
  );
}
