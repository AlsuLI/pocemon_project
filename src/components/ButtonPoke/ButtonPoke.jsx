import React from 'react'
import { Button } from "@mui/material";
import styled from 'styled-components';

const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  max-width: 496px;
`;
export function ButtonPoke({ pokeNames, setCard}) {
  
  return (
    <Buttons>
      {pokeNames?.results?.map((el) => <Button onClick={() => setCard(el.name)} variant="contained">
        {el.name}
      </Button>)}
    </Buttons>
  );
}
