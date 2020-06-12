import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

import AppContainer from "./AppContainer"
import Comprar from "./Comprar"
import Vender from "./Vender"

const Header = styled.header`
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 77px;

  div {
    width: 100%;
    max-width: 200px;
    display: flex;
    justify-content: space-between;
  }

  ul {
    list-style: none;
    display: flex;
    padding-left: 10px;
  }

  ul li a {
    margin-left: 20px;
    background-color: tomato;
  }

  img {
    width: 229px;
    height: 150px;
  }
`;

const PageShopAndSell = styled.button`
  margin-left: 20px;
  background-color: tomato;
`;

export default class GlobalHeader extends React.Component {
  state = {
    queroComprar: false,
    queroVender: false,
    queroHome: false,
  };

  onClickGoHome = () => {
    this.setState({ queroHome: !this.state.queroHome})
  }

  onClickQueroComprar = () => {
    this.setState({ queroComprar: !this.state.queroComprar})
  }

  onClickQueroVender = () => {
    this.setState({ queroVender: !this.state.queroVender})
  }


  render() {
    if(this.state.queroComprar) {
      return <Comprar />  
    } else if (this.state.queroVender) {
      return <Vender />
    } else if (this.state.queroHome) {
      return <AppContainer />
    }

    return (
      <Header>
        <div>
            <img src={Logo} alt="Logo" />
        </div>
        <div>
          <PageShopAndSell onClick={this.onClickGoHome}>Home</PageShopAndSell>
          <PageShopAndSell onClick={this.onClickQueroComprar}>Quero Comprar</PageShopAndSell>
          <PageShopAndSell onClick={this.onClickQueroVender}>Quero Vender</PageShopAndSell>
        </div>
        <nav>
          
          <ul>
            <li>
              <a>Sobre Nós</a>
            </li>
            <li>
              <a>Contato</a>
            </li>
          </ul>
        </nav>
      </Header>
    );
  }
}
