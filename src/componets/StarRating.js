import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStars = 5 }) {
  const [selectedStarts, setSelectedStars] = useState(0);
  
  const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  );
  const createArray = length => [...Array(length)];

  return (
    <>
      {createArray(totalStars).map((n, i) => 
        <Star key={i}
         selected={selectedStarts > i}
         onSelect={() => setSelectedStars(i+1)}
         />)}
      <p>
        {selectedStarts} of {totalStars} starts
      </p>
    </>

  );

}