import React from "react";
import SiteLayout from "./componets/SiteLayout";
import ErrorBoundary from "./componets/ErrorBoundary";
import ErrorScreen from "./componets/ErrorScreen";
const Menu = () => (
  <ErrorBoundary>
    <p style={{ color: "white" }}>TODO: Build Menu</p>
  </ErrorBoundary>
);

const Callout = ({ children }) => (
  <ErrorBoundary>
    <div className="callout">{children}</div>
  </ErrorBoundary>
);
const BreakThings = () => {
  throw new Error("We intentionally broke something");
};


export default function App() {

  return (
    <SiteLayout menu={
      <ErrorBoundary fallback={ErrorScreen}>
        <p>Menu</p>
      </ErrorBoundary>
    }>

      <>
        <ErrorBoundary fallback={ErrorScreen}>
          <Callout>Callout<BreakThings /></Callout>
        </ErrorBoundary>
        <ErrorBoundary fallback={ErrorScreen}>
          <h1>Contents</h1>
          <p>this is the main part of the example layout</p>
        </ErrorBoundary>
      </>
    </SiteLayout>
  );
}
