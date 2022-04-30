import React from "react";
import Color from "./Color";

export default function ColorList({ colors = [], onRemoveColor = f => f, onRateColor = f => f }) {
  if (!colors.length) {
    return (<div>
      No Colors Listed.
    </div>)
  }

  return (
    <div>
      {
        //sao cho nay ham onRemoveColor ko can truyen id vao ma color van biet duoc id cua component nao
        colors.map(color => <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor} />)
      }
    </div>
  );
}