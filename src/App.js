import React, { useState } from "react";
import Main from "./componets/Main";
import Agreement from "./componets/Agreement";

const BreakThings = () => {
  throw new Error("We intentionally broke something");
};

export default function App() {
  const [agree, setAgree] = useState(false);

  if (!agree) {
    return <Agreement onAgree={() => setAgree(true)} />
  }
  return (
    <Main />
  );
}
