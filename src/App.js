import React, { useState, lazy, Suspense } from "react";
import Agreement from "./componets/Agreement";
import ErrorBoundary from "./componets/ErrorBoundary";
const BreakThings = () => {
  throw new Error("We intentionally broke something");
};
const Main = lazy(() => import("./componets/Main"));
// const loadStatus = () => "success - ready";
// const loadStatus = () => {
//   throw new Error("test");
// };

const loadStatus = () => {
  throw new Promise(resolve => null);
};

function Status() {
  const status = loadStatus();

  return <h1>Status {status}</h1>
}
export default function App() {
  const [agree, setAgree] = useState(false);

  if (!agree) {
    return <Agreement onAgree={() => setAgree(true)} />
  }
  return (
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Status />
      </ErrorBoundary>
    </Suspense>
  );
}
