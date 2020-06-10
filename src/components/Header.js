import React from "react";
import axios from "axios";
import styled from "styled-components";
import Logo from "../assets/logo.png";

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

export default class GlobalHeader extends React.Component {
  state = {
    initialState: false,
  };
  render() {
    return (
      <Header>
        <div>
          <a>
            <img src={Logo} alt="Logo" />
          </a>
          <a>Quero Comprar/Quero Vender</a>
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
