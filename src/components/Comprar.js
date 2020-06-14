import React from "react";
import styled from "styled-components"

import Header from "./Header";
import Footer from "./Footer";

import Filter from "./CardVendaEFilter";

const MainContainer = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  background-color: #F3F3F7;
  width: 100%;
  height: auto;
`;

const SellButton = styled.button`
  position: absolute;
  top: 40px;
  left: 323px;
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  font-family: Roboto;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;;
`;

class Comprar extends React.Component {
  render() {
    return (
      <MainContainer>
        <Header />
        <SellButton onClick={this.props.changePage1}>Quero Vender</SellButton>
        <Filter />
        <Footer />
      </MainContainer> 
    );
  }
}

export default Comprar;
