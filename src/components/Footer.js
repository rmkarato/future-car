import React from 'react';
import styled from 'styled-components';
import LogoFooter from '../assets/going-yellow.png';

const FooterBox = styled.footer`
  position: absolute;
  left: 0;
  top: 3000px;
  background-color: #14213d;
  width: 100%;
  height: 180px;
  color: white;
  img {
    width: 299px;
    height: 42px;
  }
  
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
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
              <p>Camila Moura | Diogo Gaspar | Israel Cavalcanti | Leonam Moura | Renata Mitsue</p>
            </div>
          </div>
        </Info>
      </FooterBox>
    );
  }
}

export default Footer;
