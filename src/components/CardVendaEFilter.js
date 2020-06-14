import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

import CarBlue from "../assets/car-blue.svg"
import GoingBeyond from "../assets/GoingBeyond.svg"

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

const SearchBox = styled.div`
  position: absolute;
  background-color: #FCA311;
  border-radius: 8px;
  width: 720px;
  height: 150px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 100px;
`;

const ImgGoingBeyond = styled.img`
  position: absolute;
  left: 144px;
  top: 24px;
`;

const ImgCarBlue = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  right: 92px;
`;

const InputSearch = styled.input`
  border: none;
  outline: none;
  position: absolute;
  width: 425px;
  height: 38px;
  top: 84px;
  left: 47px;
  border: none;
  border-radius: 4px;
  padding-left: 40px;

  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
`;

const SearchIcon = styled.span`
  position: absolute;
  top: 90px;
  left: 55px;
`;

const FilterBox = styled.div`
  position: absolute;
  width: 70%;
  left: 0;
  right: 0;
  top: 270px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  background-color: #14213D;
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-itens: center;
`;

const FilterText = styled.h4`
  font-family: Roboto;
  color: #FCA311;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
`;

const FilterLabelMin = styled.label`
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
`;

const InputMin = styled.input`
  border: none;
  outline: none;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: 128px;
  height: 25px;
  border: none;
  border-radius: 4px;
  padding-left: 10px;
  
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  line-height: 19px;

  /*hide arrows from number input */
  ::-webkit-inner-spin-button, 
  ::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
  }
`;

const FilterLabelMax = styled.label`
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
`;

const InputMax = styled.input`
  border: none;
  outline: none;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: 128px;
  height: 25px;
  border: none;
  border-radius: 4px;
  padding-left: 10px;

  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  line-height: 19px;

  /*hide arrows from number input */
  ::-webkit-inner-spin-button, 
  ::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
  }
`;

const FilterLabelOrder = styled.label`
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
`;

const Select = styled.select`
  border: none;
  outline: none;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: 140px;
  height: 25px;
  border: none;
  border-radius: 4px;
`;

const YellowButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 166px;
  height: 42px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  background: #FCA311;
  border-radius: 12px;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #14213D;
`;

const Card = styled.div`
  background-color: #FFFFFF;
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
    color: #14213D;
    float: right;
    font-size: 20px;
  }
`;

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 345px;
`;

const UpperCase = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  color: #14213D;
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
        <Card onClick={this.iniciaModal} id={product.id}>
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
              {product.fuel} | Cor: {product.color}
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
        <SearchBox>
          <ImgGoingBeyond src={GoingBeyond} alt="GoingBeyond" />
          <ImgCarBlue src={CarBlue} alt="CarBlue" />
          <MuiThemeProvider theme={MyTheme}>
            <InputSearch
              placeholder="Digite marca ou modelo"
              value={this.state.valueInputSearch}
              onChange={this.onChangeInputSearch}
            />
            <SearchIcon>
              <Search color="primary" />
            </SearchIcon>
          </MuiThemeProvider>
        </SearchBox>

        <FilterBox>
          <FilterText>Buscar por:</FilterText>
          <FilterLabelMin>Valor Mínimo:</FilterLabelMin>
          <InputMin
            type="number"
            value={this.state.valueInputMinimum}
            onChange={this.onChangeInputMinimum}
          />

          <FilterLabelMax>Valor Máximo:</FilterLabelMax>
          <InputMax
            type="number"
            value={this.state.valueInputMaximum}
            onChange={this.onChangeInputMaximum}
          />

          <FilterLabelOrder>Ordenar Por:</FilterLabelOrder>
          <Select onChange={this.onChangeSelectPrice}>
            <option />
            <option value="increase">Preço: crescente</option>
            <option value="decrease">Preço: decrescente</option>
          </Select>
          <YellowButton onClick={this.onChangeSelectName}>Ordenar de A-Z</YellowButton>
          <YellowButton onClick={this.onChangeSelectShipping}>
            Ordenar Pelo Prazo de Entrega
          </YellowButton>
        </FilterBox>

        <Grid>{renderedList}</Grid>
        <div id="modal-produto" className="modal-container">
          <div className="modal">
            <a id="fechar">X</a>
            <PhotoCar src={renderedList.url} />
            <UpperCase>
              {renderedList.name} {renderedList.brand}
            </UpperCase>
            <p>
              {renderedList.motor} {renderedList.version}
            </p>
            <p>Prazo de Entrega: {renderedList.shipping} dias</p>
            <p>
              {renderedList.fuel} | {renderedList.doors}
            </p>
            <p>
              {renderedList.year} | {renderedList.kilometers}km
            </p>
            <p>{renderedList.cityState}</p>
            <p>
              <strong>R$ {renderedList.price}</strong>
            </p>
          </div>
        </div>
      </TelaToda>
    );
  }
}

export default CardVendaEFilter;
