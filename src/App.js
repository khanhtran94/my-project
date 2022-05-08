import React, { useState } from "react";
import faker from "faker";
import { FixedSizeList } from "react-window";
import GitHubUser from "./componets/GitHubUser";
import UserRepositories from "./componets/UserRepositories";
import RepositoryReadme from "./componets/RepositoryReadme";
import SearchForm from "./componets/SearchForm";
export default function App() {
  // const [login, setLogin] = useState("moonhighway");
  // const [repo, setRepo] = useState("learning-react");

  const [login, setLogin] = useState();
  const [repo, setRepo] = useState();
  const handleSearch = login => {
    if (login) {
      return setLogin(login);
    }
    setLogin("");
    setRepo("");
  }

  if (!login) {
    return (
      <SearchForm value={login} onSearch={handleSearch} />
    )
  }
  return (
    <>
    
      <SearchForm value={login} onSearch = {handleSearch}/>
      {login && <GitHubUser login={login} />}
      {login && (
        <UserRepositories
          login={login}
          repo={repo}
          onSelect={setRepo}
        />
      )}
      {login && repo && (
        <RepositoryReadme login={login} repo={repo} />
      )}
    </>
  );
}
