import React from 'react'
import styled from "styled-components";
import click from './assets/click.svg'
const HeaderStyly = styled.div`
  width: 980px;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

export const Header = () => {
  return (
    <HeaderStyly>
      <div>
        <p>Покемоны API</p>
      </div>
      <ImgWrapper>
        <p> <img src={click} alt="" />Нажмите на нужное Покемона</p>
      </ImgWrapper>
    </HeaderStyly>
  );
}
