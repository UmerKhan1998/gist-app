import styled from "styled-components";
import Gist from "./Gist";

const GistList = ({ data, search, filtered }) => {
  return (
    <Container>
      {data.filter(filtered(search))?.map((item, index) => (
        <Gist itemData={item} key={index} />
      ))}
    </Container>
  );
};

export default GistList;

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 576px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 992px) {
    min-width: 992px;
  }

  @media only screen and (min-width: 1160px) and (max-width: 1258px) {
    min-width: 780px;
  }

  @media only screen and (min-width: 1259px) and (max-width: 1359px) {
    min-width: 780px;
  }

  @media (min-width: 1342px) {
    min-width: 780px;
  }
`;
