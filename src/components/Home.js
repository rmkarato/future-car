import React from 'react';
import styled from 'styled-components';

import AppLogo from '../assets/AppLogo.svg'
import AppMarketing from '../assets/AppMarketing.svg'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Background = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  height: 100%;
`;

const ImgLogo = styled.img`
    margin-top: auto;
    margin-bottom: auto;
    width: 586px;
    height: 500px;
`;

const ImgBanner = styled.img`
    position: absolute;
    width: 505px;
    height: 88px;
    margin-left: auto;
    margin-right: auto;
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

class Home extends React.Component {
 render () {  
      return (
        <Container>
            <Background>
                <ImgLogo alt="LogoFutureCar" src={AppLogo} />
                <ImgBanner alt="BannerFutureCar" src={AppMarketing} />
                <ShoppingButton onClick={this.props.changePageShop}>Quero Comprar</ShoppingButton>
                <SellButton onClick={this.props.changePageSell}>Quero Vender</SellButton>
            </Background>
        </Container>
      )
    }
}

export default Home