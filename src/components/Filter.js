import React from "react";
import axios from "axios";
import styled from "styled-components";
import CardVenda from "./CardVenda";

class Comprar extends React.Component {
  state = {
    cars: [],
    valueInputMinimum: "",
    valueInputMaximum: "",
    valueInputSearch: "",
    orderedPrice: false,
    orderedShipping: false,
  };

  fetchAllCards() {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars"
      )
      .then((response) => {
        this.setState({ cars: response.data.cars });
      });
  }

  componentDidMount() {
    this.fetchAllCards();
  }

  onChangeInputMinimum = (event) => {
    this.setState({ valueInputMinimum: event.target.value });
  };

  onChangeInputMaximum = (event) => {
    this.setState({ valueInputMaximum: event.target.value });
  };

  onChangeInputSearch = (event) => {
    this.setState({ valueInputSearch: event.target.value });
  };

  // cars.name.sort()

  onChangeSelect = () => {
    // CRESCENTE E DECRESCENTE OKS
    const listPrice = this.state.cars.sort(function (a, b) {
      return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
    });
    this.setState({ cars: listPrice });
    this.setState({ orderedPrice: !this.state.orderedPrice });
    if (this.state.orderedPrice === false) {
      this.setState({ cars: listPrice.reverse() });
    }
    // NOME ???
    // const listName = this.state.cars.sort(function (a, b) {
    //   if (a.name < b.name) {
    //     return -1;
    //   }
    //   if (a.name > b.name) {
    //     return 1;
    //   }
    //   return 0;
    // });
    // console.log(listName);
  };

  render() {
    let listState = this.state.cars;
    let nameEntered = this.state.valueInputSearch; // .toUpperCase();

    if (this.state.valueInputSearch !== "") {
      listState = listState.filter((product) => {
        return product.name.includes(nameEntered);
      });
    } else if (this.state.valueInputMaximum !== "") {
      listState = listState.filter((product) => {
        return product.price <= this.state.valueInputMaximum;
      });
    } else if (this.state.valueInputMinimum !== "") {
      listState = listState.filter((product) => {
        return product.price >= this.state.valueInputMinimum;
      });
    }

    const renderList = listState.map((product) => {
      return (
        <div>
          <CardVenda
            name={product.name}
            url={product.url}
            shipping={product.shipping}
            fuel={product.fuel}
            doors={product.doors}
            year={product.year}
            kilometers={product.kilometers}
            price={product.price}
          />
        </div>
      );
    });

    return (
      <div>
        <h3>Filtros:</h3>
        <label>Valor Mínimo:</label>
        <input
          type="number"
          value={this.state.valueInputMinimum}
          onChange={this.onChangeInputMinimum}
        ></input>
        <label>Valor máximo:</label>
        <input
          type="number"
          value={this.state.valueInputMaximum}
          onChange={this.onChangeInputMaximum}
        ></input>
        <label>Procurar carro:</label>
        <input
          value={this.state.valueInputSearch}
          onChange={this.onChangeInputSearch}
        ></input>
        <select onChange={this.onChangeSelect}>
          <option></option>
          <option value="decrease">Preço: decrescente</option>
          <option value="increase">Preço: crescente</option>
          <option value="name">Nome</option>
          <option value="shipping">Prazo de entrega</option>
        </select>
        <div>{renderList}</div>
      </div>
    );
  }
}

export default Comprar;
