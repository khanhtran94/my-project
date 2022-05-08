import React, {useState} from "react";
import faker from "faker";
import { FixedSizeList } from "react-window";
import GitHubUser from "./componets/GitHubUser";
import UserRepositories from "./componets/UserRepositories";
import RepositoryReadme from "./componets/RepositoryReadme";
export default function App() {
  const [login, setLogin] = useState("moonhighway");
  const [repo, setRepo] = useState("learning-react");
  return (
    <>
      <GitHubUser login={login} />
      <UserRepositories
        login={login}
        repo={repo}
        onSelect={setRepo}
      />
      <RepositoryReadme login={login} repo={repo} />

    </>
  );
}
