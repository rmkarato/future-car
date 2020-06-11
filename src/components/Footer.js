import React from "react";
import styled from "styled-components";

const FooterBox = styled.header`
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 77px;
`;

class Footer extends React.Component {
  render() {
    return <FooterBox>Footer</FooterBox>;
  }
}

export default Footer;
