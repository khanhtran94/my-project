import React, { useEffect } from "react";
import { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log("1")
    alert(checked);
  });

  return (
    <>
      <input
        type={"checkbox"}
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}