import styled, {createGlobalStyle} from "styled-components";
import { ButtonPoke } from "./components/ButtonPoke/ButtonPoke";
import { Card } from "./components/Card/Card";
import { Layout } from "./components/Layout";
import "./global.scss";
import { useEffect, useState } from "react";

const Global = createGlobalStyle`
  box-sizing: border-box;
font-family: 'Raleway', sans-serif;
`;
const Main = styled.div`
  background: #131313;
  padding: 100px 0;
`;

const ButtonImgWrapper = styled.div`
  display: flex;
  max-width: 980px;
`;




function App() {
  const [pokeNames, setPokes] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=11&limit=11")
      .then((response) => response.json())
      .then((pokeNames) => setPokes(pokeNames));
  }, []);
  //  console.log(pokeNames);
  const [card, setCard] = useState("");
  // console.log(card);

  const [poks, setPoks] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${card}`)
      .then((response) => response.json())
      .then((poks) => setPoks(poks));
  }, [card]);

  console.log(poks);

  return (
    <Main>
      <Layout>
        <ButtonImgWrapper>
          <ButtonPoke pokeNames={pokeNames} setCard={setCard}  />
          <Card poks={poks} card={card} />
        </ButtonImgWrapper>
      </Layout>
    </Main>
  );
}

export default App;
