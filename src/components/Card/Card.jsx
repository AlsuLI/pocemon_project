import React from "react";
import styled from "styled-components";

const List = styled.li`
  color: #a0a0a0;
  list-style: none;
  font-size: 17px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;
const CardWrapper = styled.div`

  width: 100%
  height: 500px;
  padding: 44px;
  background: #000000;
`;

const CardTitle = styled.h1`
  color: #a0a0a0;
`;
export const Card = ({ card, poks }) => {
  return (
    <CardWrapper>
      <CardTitle>{card}</CardTitle>
      <img src={poks?.sprites?.front_shiny} />
      <p></p>
      <ul>
        <List>id: {poks.id}</List>
        <List>height: {poks?.height} </List>
        <List>attack: {poks?.stats?.base_stat}</List>
      </ul>
    </CardWrapper>
  );
};
