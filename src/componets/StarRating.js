import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ style = {}, totalStars = 5, ...props}) {
  const [selectedStarts, setSelectedStars] = useState(0);
  const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  );
  const createArray = length => [...Array(length)];

  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {createArray(totalStars).map((n, i) =>
        <Star key={i}
          selected={selectedStarts > i}
          onSelect={() => setSelectedStars(i + 1)}
        />)}
      <p>
        {selectedStarts} of {totalStars} starts
      </p>
    </div>

  );
}