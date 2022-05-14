import React from "react";
import { useRef, useState } from "react";
import { useInput } from "./hook/useInput";
import { useColors } from "./ColorProvider";
import { css } from "emotion";

export default function AddColorFrom() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const {addColor} = useColors();


  const submit = e => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle("");
    resetColor("#000000");

  };
  return (
    <form className={css`
    display: flex;
    justify-content: space-around;
    margin: 0.25em;
    button {
      margin: 0.25em;
    }
    input {
      margin: 0.25em;
      &:first-child {
        flex: 1;
      }
    }
  `}
    onSubmit={submit}>
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