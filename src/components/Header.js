import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.svg";

const Header = styled.header`
  background: transparent;
  top: 0;
  width: 100%;
  height: 98px;
  `;

const Ul = styled.ul` 
  position: absolute;
  list-style-type: none;
  top: 20px;
  right: 100px;
`;

const Li = styled.li` 
  display: inline;
  margin-left: 20px;
`;

const LogoHeader = styled.img`
  position: absolute;
  width: 229px;
  height: 83px;
  top: 9px;
  left: 75px;
`;

export default class GlobalHeader extends React.Component {
 
  render() {
    return (
      <Header>
        <LogoHeader src={Logo} alt="Logo" />
        <nav>
          <Ul>
            <Li>Sobre Nós</Li>
            <Li>Contato</Li>
          </Ul>
        </nav>
      </Header>
    );
  }
}
