import React, { useState } from "react";
import faker from "faker";
import { FixedSizeList } from "react-window";
import GitHubUser from "./componets/GitHubUser";
import UserRepositories from "./componets/UserRepositories";
import RepositoryReadme from "./componets/RepositoryReadme";
import SearchForm from "./componets/SearchForm";
import SiteLayout from "./componets/SiteLayout";
const Callout = ({ children }) => (
  <ErrorBoundary>
    <div className="callout">{children}</div>
  </ErrorBoundary>
);
export default function App() {
  
  return (
   <SiteLayout menu={<p>Menu</p>}>
    <>
      <Callout>Callout</Callout>
      <h1>Contents</h1>
      <p>This is the main part of the example layout</p>
    </>
   </SiteLayout>
  );
}
