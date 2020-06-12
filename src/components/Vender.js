import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Check from '@material-ui/icons/Done';
import Header from './Header';
import Footer from './Footer';

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#FCA311',
    },
  },
});

const FirstContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 1182px;
  height: 167px;
  left: 92px;
  top: 120px;

  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const ContainerPhrase = styled.div`
  width: 389px;
  height: 129px;
  left: 132px;
  top: 140px;

  margin: 19px 481px 19px 40px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  display: flex;
  align-items: center;

  color: #14213d;
`;

const ThreeChecks = styled.span`
  width: 224px;
  height: 130px;
  left: 1002px;
  top: 139px;
  margin: 19px 48px 19px 0px;
`;

const CheckboxText = styled.span`
  font-size: 20px;
  line-height: 20px;
`;

const FormBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  width: 856px;
  height: 1000px;
  left: 92px;
  top: 335px;

  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const FirstForm = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  margin-left: 40px;
`;
const SecondForm = styled.div`
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  margin-left: 159px;
  margin-top: 65px;
  margin-right: 40px;
  margin-bottom: 154px;
`;

const ThirdForm = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  margin-left: 40px;
`;

const FourthForm = styled.div`
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  margin-left: 159px;
`;

const Label = styled.label`
  display: block;
`;

const DescriptionBox = styled.input`
  width: 312px;
  height: 101px;

  background: #f3f3f7;
  border-radius: 4px;
  border: none;
`;
const StandardInput = styled.input`
  width: 312px;
  height: 30px;

  background: #f3f3f7;
  border-radius: 4px;
  border: none;
`;

const SmallInput = styled.input`
  width: 140px;
  height: 30px;

  background-color: #f3f3f7;
  border-radius: 4px;
  border: none;
`;

const RadioInput = styled.input`
  background: #f3f3f7;
  border: none;
`;

class Vender extends React.Component {
  state = {
    name: '',
    brand: '',
    motor: '',
    version: '',
    description: '',
    cityState: '',
    price: '',
    paymentMethod: [
      {
        cash: false,
        installments: false,
        financing: false,
      },
    ],
    shipping: '',
    year: '',
    exchange: true,
    kilometers: '',
    doors: true,
    color: '',
    fuelType: '',
    airConditioning: true,
    eletricWindows: true,
    electricalLocks: true,
    leatherSeat: true,
    parkingSensor: true,
    parkingCamera: true,
    multimidia: true,
    url: '',
  };

  handleNameChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleBrandChange = (event) => {
    const newBrandValue = event.target.value;

    this.setState({ brand: newBrandValue });
  };

  handleMotorChange = (event) => {
    const newMotorValue = event.target.value;

    this.setState({ motor: newMotorValue });
  };

  handleVersionChange = (event) => {
    const newVersionValue = event.target.value;

    this.setState({ version: newVersionValue });
  };

  handleDescriptionChange = (event) => {
    const newDescriptionValue = event.target.value;

    this.setState({ description: newDescriptionValue });
  };

  handleCityStateChange = (event) => {
    const newCityStateValue = event.target.value;

    this.setState({ cityState: newCityStateValue });
  };

  handlePriceChange = (event) => {
    const newPriceValue = event.target.value;

    this.setState({ price: newPriceValue });
  };

  handlePaymentMethodChange = (event) => {
    const newPaymentMethodValue = event.target.value;

    this.setState({ paymentMethod: newPaymentMethodValue });
  };

  handleShippingChange = (event) => {
    const newShippingValue = event.target.value;

    this.setState({ shipping: newShippingValue });
  };

  handleYearChange = (event) => {
    const newYearValue = event.target.value;

    this.setState({ year: newYearValue });
  };

  handleExchangeChange = (event) => {
    const newExchangeValue = event.target.value;

    this.setState({ exchange: newExchangeValue });
  };

  handleKilometersChange = (event) => {
    const newKilometersValue = event.target.value;

    this.setState({ kilometers: newKilometersValue });
  };

  handleDoorsChange = (event) => {
    const newDoorsValue = event.target.value;

    this.setState({ doors: newDoorsValue });
  };

  handleColorChange = (event) => {
    const newColorValue = event.target.value;

    this.setState({ color: newColorValue });
  };

  handleFuelTypeChange = (event) => {
    const newFuelTypeValue = event.target.value;

    this.setState({ fuelType: newFuelTypeValue });
  };

  handleAirConditioningChange = (event) => {
    const newAirConditioningValue = event.target.value;

    this.setState({ airConditioning: newAirConditioningValue });
  };

  handleEletricWindowsChange = (event) => {
    const newEletricWindowsValue = event.target.value;

    this.setState({ eletricWindows: newEletricWindowsValue });
  };

  handleElectricalLocksChange = (event) => {
    const newElectricalLocksValue = event.target.value;

    this.setState({ electricalLocks: newElectricalLocksValue });
  };

  handleAirConditioningChange = (event) => {
    const newElectricalLocksValue = event.target.value;

    this.setState({ electricalLocks: newElectricalLocksValue });
  };

  handleLeatherSeatChange = (event) => {
    const newLeatherSeatValue = event.target.value;

    this.setState({ leatherSeat: newLeatherSeatValue });
  };

  handleParkingSensorChange = (event) => {
    const newParkingSensorValue = event.target.value;

    this.setState({ parkingSensor: newParkingSensorValue });
  };

  handleParkingCameraChange = (event) => {
    const newParkingCameraValue = event.target.value;

    this.setState({ parkingCamera: newParkingCameraValue });
  };

  handleMultimidiaChange = (event) => {
    const newMultimidiaValue = event.target.value;

    this.setState({ multimidia: newMultimidiaValue });
  };

  handleUrlChange = (event) => {
    const newUrlValue = event.target.value;

    this.setState({ url: newUrlValue });
  };

  handleCreateAnnouncement = () => {
    const body = {
      name: this.state.name,
      brand: this.state.brand,
      motor: this.state.motor,
      version: this.state.version,
      description: this.state.description,
      cityState: this.state.cityState,
      price: this.state.price,
      paymentMethod: [
        {
          method: this.state.paymentMethod,
        },
      ],
      shipping: this.state.shipping,
      year: this.state.year,
      exchange: this.state.exchange,
      kilometers: this.state.kilometers,
      doors: this.state.doors,
      color: this.state.color,
      fuel: this.state.fuelType,
      airConditioning: this.state.airConditioning,
      eletricWindows: this.state.eletricWindows,
      electricalLocks: this.state.electricalLocks,
      leatherSeat: this.state.leatherSeat,
      parkingSensor: this.state.parkingSensor,
      parkingCamera: this.state.parkingCamera,
      multimidia: this.state.multimidia,
      url: this.state.url,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars`,
        body
      )
      .then((resp) => {
        alert('Anúncio criado com sucesso!');
        this.setState({
          name: '',
          brand: '',
          motor: '',
          version: '',
          description: '',
          cityState: '',
          price: '',
          paymentMethod: '',
          shipping: '',
          year: '',
          exchange: true,
          kilometers: '',
          doors: true,
          color: '',
          fuelType: '',
          airConditioning: true,
          eletricWindows: true,
          electricalLocks: true,
          leatherSeat: true,
          parkingSensor: true,
          parkingCamera: true,
          multimidia: true,
          url: '',
        });
      })
      .catch((error) => {
        alert('Ocorreu um erro ao criar o anúncio');
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.props.changePage2}>Quero Comprar</button>
        <FirstContainer>
          <ContainerPhrase>
            Que tal vender seu carro na FutureCar?
          </ContainerPhrase>
          <ThreeChecks>
            <MuiThemeProvider theme={MyTheme}>
              <p>
                <Check color="primary" /> <CheckboxText>Fácil</CheckboxText>
              </p>
              <p>
                <Check color="primary" /> <CheckboxText>Rápido</CheckboxText>
              </p>
              <p>
                <Check color="primary" /> <CheckboxText>Seguro</CheckboxText>
              </p>
            </MuiThemeProvider>
          </ThreeChecks>
        </FirstContainer>
        <FormBox>
          <FirstForm>
            <h3>Anuncie aqui!</h3>
            <div>
              <Label>Título:</Label>
              <StandardInput
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </div>

            <div>
              <Label>Marca:</Label>
              <StandardInput
                type="text"
                value={this.state.brand}
                onChange={this.handleBrandChange}
              />
            </div>
          
            <div>
              <Label>Ano Modelo:</Label>
              <SmallInput
                type="number"
                value={this.state.year}
                onChange={this.handleYearChange}
              />
            </div>

            <div>
              <Label>Cor:</Label>
              <SmallInput
                type="text"
                value={this.state.color}
                onChange={this.handleColorChange}
              />
            </div>

            <div>
              <Label>Km Rodados:</Label>
              <StandardInput
                type="number"
                value={this.state.kilometers}
                onChange={this.handleKilometersChange}
              />
            </div>

            <div>
              <Label>Valor de Venda:</Label>
              <StandardInput
                type="number"
                value={this.state.price}
                onChange={this.handlePriceChange}
              />
            </div>

            <div>
              <Label>Prazo de Entrega:</Label>
              <StandardInput
                type="number"
                value={this.state.shipping}
                onChange={this.handleShippingChange}
              />
            </div>

            <div>
              <Label>Combustível:</Label>
              <select
                value={this.state.fuelType}
                onChange={this.handleFuelTypeChange}
              >
                <option />
                <option>Etanol</option>
                <option>Gasolina</option>
                <option>Flex</option>
                <option>GNV</option>
                <option>Diesel</option>
              </select>
            </div>

            <div>
              <Label>Travas Elétricas:</Label>
              <RadioInput
                type="radio"
                name="travas"
                value={this.state.electricalLocks}
                onChange={this.handleElectricalLocksChange}
              />
              Sim
              <RadioInput
                type="radio"
                name="travas"
                value={this.state.electricalLocks}
                onChange={this.handleElectricalLocksChange}
              />
              Não
            </div>

            <div>
              <Label>Ar Condicionado:</Label>
              <RadioInput
                type="radio"
                name="ar"
                value={this.state.airConditioning}
                onChange={this.handleAirConditioningChange}
              />
              Sim
              <RadioInput
                type="radio"
                name="ar"
                value={this.state.airConditioning}
                onChange={this.handleAirConditioningChange}
              />
              Não
            </div>
          </FirstForm>

          <SecondForm>
            <div>
              <Label>Descrição:</Label>
              <DescriptionBox
                type="text"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
            </div>

            <div>
              <Label>Motor:</Label>
              <SmallInput
                type="text"
                value={this.state.motor}
                onChange={this.handleMotorChange}
              />
            </div>

            <div>
              <Label>Versão:</Label>
              <SmallInput
                type="text"
                value={this.state.motor}
                onChange={this.handleMotorChange}
              />
            </div>

            <div>
              <Label>Cidade/Estado:</Label>
              <StandardInput
                type="text"
                value={this.state.cityState}
                onChange={this.handleCityStateChange}
              />
            </div>

            <div>
              <Label>Método de Pagamento:</Label>
              <RadioInput
                type="checkbox"
                name="payment"
                value={this.state.paymentMethod}
                onChange={this.handlePaymentMethodChange}
              />
              <label>À Vista</label>
              <RadioInput
                type="checkbox"
                name="payment"
                value={this.state.paymentMethod}
                onChange={this.handlePaymentMethodChange}
              />
              <label>Parcelado</label>
              <RadioInput
                type="checkbox"
                name="payment"
                value={this.state.paymentMethod}
                onChange={this.handlePaymentMethodChange}
              />
              <label>Financiamento</label>
            </div>

            <div>
              <Label>Câmbio:</Label>
              <RadioInput
                type="radio"
                name="cambio"
                value={this.state.exchange}
                onChange={this.handleExchangeChange}
              />
              Manual
              <RadioInput
                type="radio"
                name="cambio"
                value={this.state.exchange}
                onChange={this.handleExchangeChange}
              />
              Automático
            </div>

            <div>
              <Label>Portas:</Label>
              <RadioInput
                type="radio"
                name="portas"
                value={this.state.doors}
                onChange={this.handleDoorsChange}
              />
              2
              <RadioInput
                type="radio"
                name="portas"
                value={this.state.doors}
                onChange={this.handleDoorsChange}
              />
              4
            </div>

            <div>
              <Label>Vidros Elétricos:</Label>
              <RadioInput
                type="radio"
                name="vidros"
                value={this.state.eletricWindows}
                onChange={this.handleEletricWindowsChange}
              />
              Sim
              <RadioInput
                type="radio"
                name="vidros"
                value={this.state.eletricWindows}
                onChange={this.handleEletricWindowsChange}
              />
              Não
            </div>

            <div>
              <Label>URL Foto:</Label>
              <StandardInput
                type="url"
                id="homepage"
                name="homepage"
                value={this.state.url}
                onChange={this.handleUrlChange}
              />
            </div>
          </SecondForm>

          <ThirdForm>
            <hr />
            <h4>Diferenciais</h4>

            <div>
              <Label>Bancos de Couro:</Label>
              <RadioInput
                type="radio"
                name="couro"
                value={this.state.leatherSeat}
                onChange={this.handleLeatherSeatChange}
              />
              Sim
              <RadioInput
                type="radio"
                name="couro"
                value={this.state.leatherSeat}
                onChange={this.handleLeatherSeatChange}
              />
              Não
            </div>

            <div>
              <Label>Sensor de Estacionamento:</Label>
              <RadioInput
                type="radio"
                name="sensor"
                value={this.state.parkingSensor}
                onChange={this.handleParkingSensorChange}
              />
              Sim
              <RadioInput
                type="radio"
                name="sensor"
                value={this.state.parkingSensor}
                onChange={this.handleParkingSensorChange}
              />
              Não
            </div>

            <button onClick={this.handleCreateAnnouncement} id="submitButton">
              Anunciar
            </button>
          </ThirdForm>

          <FourthForm>
            <div>
              <Label>Câmera de Estacionamento:</Label>
              <RadioInput
                type="radio"
                name="camera"
                value={this.state.parkingCamera}
                onChange={this.handleParkingCameraChange}
              />
              Sim
              <RadioInput
                type="radio"
                name="camera"
                value={this.state.parkingCamera}
                onChange={this.handleParkingCameraChange}
              />
              Não
            </div>
            <div>
              <Label>Multimidia:</Label>
              <RadioInput
                type="radio"
                name="midia"
                value={this.state.multimidia}
                onChange={this.handleMultimidiaChange}
              />
              Sim
              <RadioInput
                type="radio"
                name="midia"
                value={this.state.multimidia}
                onChange={this.handleMultimidiaChange}
              />
              Não
            </div>
          </FourthForm>
        </FormBox>

        <Footer />
      </div>
    );
  }
}

export default Vender;
