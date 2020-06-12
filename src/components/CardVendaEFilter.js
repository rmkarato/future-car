import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
  background-color: grey;
  width: 280px;
  height: 400px;
  box-shadow: 0 0 2px;
  border-radius: 8px;
  border: solid 1px black;
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

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin: auto;
  border: solid 1px black;
  align-items: center;
  justify-content: center;
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

const TelaToda = styled.div`
  .modal-container {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 2000;
    display: none;
    justify-content: center;
    align-items: center;
  }
  .modal-container.mostrar {
    display: flex;
  }
  .modal {
    position: relative;
    background: white;
    width: 60%;
    min-width: 600px;
    height: 60vh;
    border-radius: 10px;
    #fechar {
      color: red;
      position: absolute;
      top: 0px;
      right: 0px;
    }
  }
  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .mostrar .modal {
    animation: modal 0.3s;
  }
`;

/*const produto = document.querySelector('.produto');
produto.addEventListener('click', function() {
  iniciaModal('modal-produto')
})*/

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
    this.setState({ valueInputMinimum: Number(event.target.value) });
  };

  onChangeInputMaximum = (event) => {
    this.setState({ valueInputMaximum: Number(event.target.value) });
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

  iniciaModal() {
    const modalID = document.getElementById('modal-produto');
    modalID.classList.add('mostrar');
    modalID.addEventListener('click', (event) => {
      if (event.target.id == 'modal-produto' || event.target.id == 'fechar') {
        modalID.classList.remove('mostrar');
      }
    });
  }

  render() {
    let nameEntered = this.state.valueInputSearch; // .toUpperCase();
    let listState = this.state.cars;

    if (this.state.valueInputSearch !== '') {
      listState = listState.filter((product) => {
        return (
          product.name.includes(nameEntered) ||
          product.brand.includes(nameEntered)
        );
      });
    }

    if (this.state.valueInputMinimum !== '') {
      listState = listState.filter((product) => {
        return product.price >= this.state.valueInputMinimum;
      });
    }

    if (this.state.valueInputMaximum !== '') {
      listState = listState.filter((product) => {
        return product.price <= this.state.valueInputMaximum;
      });
    }

    const renderedList = listState.map((product) => {
      return (
        <Card onClick={this.iniciaModal}>
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
            <p>
              {product.year} | {product.kilometers}km
            </p>
            <p>{product.cityState}</p>
            <p>
              <strong>R$ {product.price}</strong>
            </p>
          </Description>
        </Card>
      );
    });

    return (
      <TelaToda>
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

        <Grid>{renderedList}</Grid>

        <div id="modal-produto" className="modal-container">
          <div className="modal">
            <a id="fechar">X</a>
            <h1>Aqui vão as informações do carro</h1>
          </div>
        </div>
      </TelaToda>
    );
  }
}

export default CardVendaEFilter;
