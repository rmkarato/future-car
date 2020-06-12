import React, { Component } from 'react';
import styled from 'styled-components';

import Vender from './Vender';
import Comprar from './Comprar';

import AppLogo from '../assets/AppLogo.svg'
import AppMarketing from '../assets/AppMarketing.svg'
import MenuIcon from '@material-ui/icons/Menu'

const Background = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  height: 100%;
`;

const MenuButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 1292px;
  top: 40px;
  `;

const Logo = styled.img`
  position: absolute;
  width: 586px;
  height: 500px;
  left: 138px;
  top: 127px;
`;

const Banner = styled.img`
  position: absolute;
  width: 505px;
  height: 88px;
  left: 430px;
  top: 102px;
`;

const ShoppingButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  width: 166px;
  height: 42px;
  left: 836px;
  top: 366px;
  background: #FCA311;
  border-radius: 12px;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #14213D;
`;

const SellButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  width: 166px;
  height: 42px;
  left: 1076px;
  top: 366px;
  background: #14213D;
  border-radius: 12px;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #FCA311;
`;

export class AppContainer extends Component {
  state = {
    queroComprar: false,
    queroVender: false,
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
    }
    
    if(this.state.queroVender) {
      return <Vender />
    }
    
      return (
        <Background>
          <MenuButton src={MenuIcon}/>
          <Banner alt="Marketing" src={AppMarketing} />
          <Logo alt="FutureCar" src={AppLogo} />
          <ShoppingButton onClick={this.onClickQueroComprar}>Quero Comprar</ShoppingButton>
          <SellButton onClick={this.onClickQueroVender}>Quero Vender</SellButton>
        </Background>
      )
    }
}

export default AppContainer

