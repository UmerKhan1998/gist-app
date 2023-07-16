import { useState } from "react";

import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import { useQuery } from "react-query";

import { getGistForUser, getPublicGists } from "./services/gistService";
import GistList from "./components/GistList";

const App = () => {
  // const { data, status } = useQuery("gists", getGistForUser(""));
  const { data, status } = useQuery("gists", getPublicGists);

  const [search, setSearch] = useState("");

  // getGistForUser api is not working fine it throws an error, so that's why i make the searching via states
  const filtered = (search) => (f) =>
    f?.owner?.login?.toLowerCase().includes(search);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error!</p>;
  }

  return (
    <Wrapper className="App" data-testid="app">
      <Header setSearch={setSearch} />
      <GistList search={search} data={data?.data} filtered={filtered} />
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
