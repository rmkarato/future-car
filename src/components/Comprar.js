import React from "react";
import axios from "axios";
import styled from "styled-components";
import CardVenda from "./CardVenda";
import Header from "./Header";
import Footer from "./Footer";

const Card = styled.div`
  background-color: grey;
  width: 280px;
  height: 400px;
  border: solid 1px black;
  margin: 10px;
`;

const PhotoCar = styled.img`
  max-width: 100%;
  display: block;
`;

class Comprar extends React.Component {
  state = {
    cars: [],
    maxValue: Infinity,
    minValue: 0,
  };

  fetchAllCards() {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars"
      )
      .then((response) => {
        this.setState({ cars: response.data.cars });
        console.log(response.data);
      });
  }

componentDidMount() {
    this.fetchAllCards();
  }

onChangeMinValue = (event) => {
    this.setState({ minValue: Number(event.target.value) });
};

onChangeMaxValue = (event) => {
  this.setState({ maxValue: Number(event.target.value) });
};

filterProductsByValue = () => {
  let filteredProducts = this.state.cars;
  if (this.state.minValue) {
      filteredProducts = filteredProducts.filter(product => {
         return product.price >= this.state.valorMinimo;
      })
  }
  if (this.state.valorMaximo) {
      filteredProducts = filteredProducts.filter(product => {
         return product.price <= this.state.valorMaximo;
      })
  }

  return filteredProducts
}; 

  render() {
    return (
      <div>
        <Header />

        <h2>Filtros:</h2>
          <label>Valor Mínimo</label>
            <input
              type="number"
              onChange={this.onChangeMinValue}
            />
        
          <label>Valor Máximo</label>
            <input
              type="number"
              onChange={this.onChangeMaxValue}
            />

          {this.state.cars.map((infoCar) => {
          return (
            <Card>
              <PhotoCar src={infoCar.url} />
              <h2>{infoCar.name}</h2>
              <p>VERSAO MOTOR </p>
              <p>{infoCar.exchange}</p>
              <p>{infoCar.fuel}</p>
              <p>{infoCar.doors}</p>
              <p>
                {infoCar.year} | {infoCar.kilometers}
              </p>
              <p>R$ {infoCar.price}</p>
            </Card>
          );
        })}

          {this.filterProductsByValue}
        <Footer />
      </div>
    );
  }
}

export default Comprar;
