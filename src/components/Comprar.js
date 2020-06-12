import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import Filter from "./CardVendaEFilter";
 

class Comprar extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <button onClick={this.props.changePage1}>Quero Vender</button>
        <Filter />
        <Footer />
      </div>
    );
  }
}

export default Comprar;
