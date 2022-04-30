import React from "react";
import { useRef, useState } from "react";
import { useInput } from "../hook/useInput";

export default function AddColorFrom({ onNewColor = f => f }) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");


  const submit = e => {
    e.preventDefault();
    onNewColor(titleProps, colorProps);
    resetTitle("");
    resetColor("#000000");

  };
  return (
    <form onSubmit={submit}>
      <input {...titleProps}
        type="text"
        placeholder="color title..."
        required />
      <input
        {...colorProps}
        type="color"
        required />
      <button>ADD</button>
    </form>
  );
}