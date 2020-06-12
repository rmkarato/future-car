import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Main Section + Cards de Produto
const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  align-items: center;
  justify-content: flex-start;
  background-color: #F3F3F7;
`;

const Card = styled.div`
  width: 280px;
  height: 400px;
  box-shadow: 0 0 2px;
  border-radius: 8px;
  margin: 10px;
  line-height: 6px;
  :hover {
    box-shadow: 0 0 4px;
    transition: 200ms;
  }
`;

const Description = styled.div`
  text-align: start;
  margin: 0 14px;
  font-size: 14px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  strong {
    float: right;
    font-size: 24px;
  }
`;

const UpperCase = styled.h2`
  text-transform: uppercase;
  font-size: 24px;
`;

const PhotoCar = styled.img`
  width: 251px;
  height: 203px;
  margin: 11px 14px;
  max-width: 100%;
  border-radius: 8px;
`;

class CardVendaEFilter extends React.Component {
  state = {
    cars: [],
    valueInputMinimum: '',
    valueInputMaximum: '',
    valueInputSearch: '',
    orderedPrice: true,
    orderedShipping: false,
    orderedName: false,
  };

  fetchAllCards() {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars'
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

  onChangeSelectPrice = () => {
    const listPrice = this.state.cars.sort(function (a, b) {
      return a.price - b.price;
    });
    this.setState({ cars: listPrice });
    this.setState({ orderedPrice: !this.state.orderedPrice });
    if (this.state.orderedPrice === false) {
      this.setState({ cars: listPrice.reverse() });
    }
  };

  onChangeSelectShipping = () => {
    const listShipping = this.state.cars.sort(function (carA, carB) {
      return carB.shipping - carA.shipping;
    });
    this.setState({ cars: listShipping });
    this.setState({ orderedShipping: !this.state.orderedShipping });
    if (this.state.orderedShipping === false) {
      this.setState({ cars: listShipping.reverse() });
    }
  };

  onChangeSelectName = () => {
    const listName = this.state.cars.sort(function (car1, car2) {
      const name1 = car1.name;
      const name2 = car2.name;
      return name2.localeCompare(name1);
    });
    this.setState({ cars: listName });
    this.setState({ orderedName: !this.state.orderedName });
    if (this.state.orderedName === false) {
      this.setState({ cars: listName.reverse() });
    }
  };

  onClickOrderedName = () => {
    this.setState({ orderedName: !this.state.orderedName });
  };

  onClickOrderedShipping = () => {
    this.setState({ orderedShipping: !this.state.orderedShipping });
  };

  render() {
    let nameEntered = this.state.valueInputSearch; // .toUpperCase();

    if (this.state.valueInputSearch !== '') {
      this.state.cars.filter((product) => {
        return product.name.includes(nameEntered);
      });
    } else if (this.state.valueInputMaximum !== '') {
      this.state.cars.filter((product) => {
        return product.price <= this.state.valueInputMaximum;
      });
    } else if (this.state.valueInputMinimum !== '') {
      this.state.cars.filter((product) => {
        return product.price >= this.state.valueInputMinimum;
      });
    }

    return (
      <div>
        <div>
          <label>Procurar carro:</label>
          <input
            value={this.state.valueInputSearch}
            onChange={this.onChangeInputSearch}
          />
        </div>

        <div>
          <h3>Filtros:</h3>
          <label>Valor Mínimo:</label>
          <input
            type="number"
            value={this.state.valueInputMinimum}
            onChange={this.onChangeInputMinimum}
          />

          <label>Valor máximo:</label>
          <input
            type="number"
            value={this.state.valueInputMaximum}
            onChange={this.onChangeInputMaximum}
          />

          <label>Ordenar Por:</label>
          <select onChange={this.onChangeSelectPrice}>
            <option />
            <option value="increase">Preço: crescente</option>
            <option value="decrease">Preço: decrescente</option>
          </select>
          <button onClick={this.onChangeSelectName}>Ordenar de A-Z</button>
          <button onClick={this.onChangeSelectShipping}>
            Ordenar Pelo Prazo de Entrega
          </button>
        </div>

        <Grid>
          {this.state.cars.map((product) => {
            return (
              <Card>
                <PhotoCar src={product.url} />
                <Description>
                  <UpperCase>
                    {product.name} {product.brand}
                  </UpperCase>
                  <p>
                    {product.motor} {product.version}
                  </p>
                  <p>Prazo de Entrega: {product.shipping} dias</p>
                  <p>
                    {product.fuel} | {product.doors}
                  </p>
                  <p>{product.cityState}</p>
                  <div>
                    <span>
                      <p>
                        {product.year} | {product.kilometers}km
                      </p>
                    </span>
                    <p>
                      <strong>R$ {product.price}</strong>
                    </p>
                  </div>
                </Description>
              </Card>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default CardVendaEFilter;
