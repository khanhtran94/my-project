import React, { useState } from "react";
import faker from "faker";
import { FixedSizeList } from "react-window";
import GitHubUser from "./componets/GitHubUser";
import UserRepositories from "./componets/UserRepositories";
import RepositoryReadme from "./componets/RepositoryReadme";
import SearchForm from "./componets/SearchForm";
import SiteLayout from "./componets/SiteLayout";
import ErrorBoundary from "./componets/ErrorBoundary";
function ErrorScreen({ error }) {
  //
  // Here you can handle or track the error before rendering the message
  //

  return (
    <div className="error">
      <h3>We are sorry... something went wrong</h3>
      <p>We cannot process your request at this moment.</p>
      <p>ERROR: {error.message}</p>
    </div>
  );
}

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
