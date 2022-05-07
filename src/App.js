import React from "react";
import faker from "faker";
import { FixedSizeList } from "react-window";
import GitHubUser from "./componets/GitHubUser"


export default function App() {
  return (
    <>
      <GitHubUser login ="moonhighway" />
    </>
  );
}
