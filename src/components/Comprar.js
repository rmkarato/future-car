import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import Filter from "./CardVendaEFilter";
 

class Comprar extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Filter />
        <Footer />
      </div>
    );
  }
}

export default Comprar;
