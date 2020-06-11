import React from "react";

import CardVenda from "./CardVenda";

import Header from "./Header";
import Footer from "./Footer";
import Filter from "./Filter";

class Comprar extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Filter />
        <CardVenda />
        <Footer />
      </div>
    );
  }
}

export default Comprar;
