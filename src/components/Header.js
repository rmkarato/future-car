import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.svg";

const Header = styled.header`
  
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

const LogoHeader = styled.img`
  width: 229px;
  height: 83px
  top: 14px;
`;


export default class GlobalHeader extends React.Component {
 

  render() {

    return (
      <Header>
        <div>
            <LogoHeader src={Logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <p>Sobre Nós</p>
            </li>
            <li>
              <p>Contato</p>
            </li>
          </ul>
        </nav>
      </Header>
    );
  }
}
