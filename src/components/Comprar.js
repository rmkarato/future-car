import React from "react";
import CardVenda from "./CardVenda";
import Header from "./Header";
import Footer from "./Footer";

class Comprar extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CardVenda />
        <Footer />
      </div>
    );
  }
}

export default Comprar;
