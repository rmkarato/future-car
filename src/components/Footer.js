import React from 'react';
import styled from 'styled-components';
import LogoFooter from '../assets/going-yellow.png';

const FooterBox = styled.footer`
  background-color: #14213d;
  height: 267px;
  color: white;
  img {
    width: 299px;
    height: 42px;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
  height: 100%;
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterBox>
        <Info>
          <div>
            <p>Trabalhe com a gente</p>
            <p>Política de Privacidade</p>
            <p>Termos de Uso</p>
          </div>
          <div>
            <img src={LogoFooter} alt="Going Beyond." />
          </div>
          <div>
            <div>
              <p>Segunda a sexta, das 8h às 20h</p>
              <p>Sábado, das 8h às 18h</p>
            </div>
            <div>
              <p>Social Media</p>
            </div>
          </div>
        </Info>
      </FooterBox>
    );
  }
}

export default Footer;
