import React, { useContext } from "react";
import Color from "./Color";
import { useColors } from "./ColorProvider";

export default function ColorList() {
  const { colors } = useColors();

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
           />)
          
      }
    </div>
  );
}