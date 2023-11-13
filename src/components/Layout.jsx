import React from 'react'
import styled from 'styled-components'
import { Header } from './Header/Header';
const Container = styled.div`
  width: 1280px;
  padding: 0 150px;
  display: flex;
  flex-direction: column;
`;

export const Layout = ({children}) => {
  return (
    <>
      
      <Container>
       <Header/> 
        {children}
      </Container>
    </>
  )
}
