import React, { useState, lazy, Suspense } from "react";
import Agreement from "./componets/Agreement";
const BreakThings = () => {
  throw new Error("We intentionally broke something");
};
const Main = lazy(() => import("./componets/Main"));

export default function App() {
  const [agree, setAgree] = useState(false);

  if (!agree) {
    return <Agreement onAgree={() => setAgree(true)} />
  }
  return (
    <Suspense>
      <Main />

    </Suspense>

  );
}
