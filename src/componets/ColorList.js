import React, { useContext } from "react";
import Color from "./Color";
import { useColors } from "./ColorProvider";
import { css } from "emotion";

export default function ColorList() {
  const { colors } = useColors();

  if (!colors.length) {
    return (<div >
      No Colors Listed.
    </div>)
  }

  return (
    <div 
     className={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
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