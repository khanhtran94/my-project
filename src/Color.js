import React, { useState } from "react";
import StarRating from './StarRating';
import { FaTrash } from "react-icons/fa";
import { useColors } from "./ColorProvider";
import { css } from "emotion";
import { useNavigate } from "react-router-dom";

export default function Color({ id, title, color, rating}) {
  const {rateColor, removeColor} = useColors();
  let navigate = useNavigate();

  return (
    <section
    className={css`
        flex-basis: calc(25% - 2px - 0.5em);
        @media screen and (max-width: 1200px) {
          flex-basis: calc(33.3334% - 2px - 0.5em);
        }
        @media screen and (max-width: 800px) {
          flex-basis: calc(50% - 2px - 0.5em);
        }
        @media screen and (max-width: 500px) {
          flex-basis: calc(100% - 2px - 0.5em);
        }
        margin: 0.25em;
        border: 1px solid #ededed;
        h1 {
          margin: 0;
          text-align: center;
        }
      `}
      onClick={() => navigate(`/${id}`)}
    >
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={rating => rateColor(id, rating)}
      />
    </section>
  );
}