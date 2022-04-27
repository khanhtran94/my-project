import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStars = 5 }) {
  const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  );
  const createArray = length => [...Array(length)];
  const [selectedStarts] = useState(3);

  return (
    <>
      {createArray(totalStars).map((n, i) => 
        <Star key={i} selected={selectedStarts > i} />)}
      <p>
        {selectedStarts} of {totalStars} starts
      </p>
    </>

  );

}