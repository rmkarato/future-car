import React from 'react';
import axios from 'axios';

class Vender extends React.Component {
    state = {
        cars: [],
        name: "",
        description: "",
        cityState: "",
        price: "",
        paymentMethod: [{
            cash: false,
            installments: false,
            financing: false,
        }],
        shipping: "",
        year: "",
        exchange: true,
        kilometers: "",
        doors: true,
        color: "",
        fuelType: "",
        airConditioning: true,
        eletricWindows: true,
        electricalLocks: true,
        leatherSeat: true,
        parkingSensor: true,
        parkingCamera: true,
        multimidia: true,
        url: ""
      };
    
      handleNameChange = event => {
        const newNameValue = event.target.value;
    
        this.setState({ name: newNameValue });
      };
    
      handleDescriptionChange = event => {
        const newDescriptionValue = event.target.value;
    
        this.setState({ description: newDescriptionValue });
      };
    
      handleCityStateChange = event => {
        const newCityStateValue = event.target.value;
    
        this.setState({ cityState: newCityStateValue });
      };
    
      handlePriceChange = event => {
        const newPriceValue = event.target.value;
    
        this.setState({ price: newPriceValue });
      };
    
      handlePaymentMethodChange = event => {
        const newPaymentMethodValue = this.state.paymentMethod.map((method) => {
          if (event.target.value === "aVista") {
            const validMethod = {
              ...method,
              cash: !method.cash 
            }
            return validMethod
          } else if (event.target.value === "parcelado") {
            const validMethod = {
              ...method, 
              installments: !method.installments
            }
            return validMethod
          } else if (event.target.value === "financiamento") {
            const validMethod = {
              ...method, 
              financing: !method.financing
            }
            return validMethod
          }
        });
        this.setState ({ paymentMethod: newPaymentMethodValue })
      };
    
      handleShippingChange = event => {
        const newShippingValue = event.target.value;
    
        this.setState({ shipping: newShippingValue });
      };
    
      handleYearChange = event => {
        const newYearValue = event.target.value;
    
        this.setState({ year: newYearValue });
      };
    
      handleExchangeChange = event => {
        if (event.target.value === "Manual") {
          this.setState({ exchange: !this.state.exchange });
        }
      };
    
      handleKilometersChange = event => {
        const newKilometersValue = event.target.value;
    
        this.setState({ kilometers: newKilometersValue });
      };
    
      handleDoorsChange = event => {
        if (event.target.value === "2") {
          this.setState({ doors: !this.state.doors });
        }
      };
    
      handleColorChange = event => {
        const newColorValue = event.target.value;
    
        this.setState({ color: newColorValue });
      };
    
      handleFuelTypeChange = event => {
        const newFuelTypeValue = event.target.value;
    
        this.setState({ fuelType: newFuelTypeValue });
      };
    
      handleAirConditioningChange = event => {
        if (event.target.value === "Não") {
          this.setState({ airConditioning: !this.state.airConditioning });
        }};
    
      handleEletricWindowsChange = event => {
        if (event.target.value === "Não") {
          this.setState({ eletricWindows: !this.state.eletricWindows });
        }};
    
      handleElectricalLocksChange = event => {
        if (event.target.value === "Não") {
          this.setState({ electricalLocks: !this.state.electricalLocks });
        }};
    
      handleLeatherSeatChange = event => {
        if (event.target.value === "Não") {
          this.setState({ leatherSeat: !this.state.leatherSeat });
        }
      };
    
      handleParkingSensorChange = event => {
        if (event.target.value === "Não") {
          this.setState({ parkingSensor: !this.state.parkingSensor });
        }};
    
      handleParkingCameraChange = event => {
        if (event.target.value === "Não") {
          this.setState({ parkingCamera: !this.state.parkingCamera });
        }};
    
      handleMultimidiaChange = event => {
        if (event.target.value === "Não") {
          this.setState({ multimidia: !this.state.multimidia });
        }
      };
    
      handleUrlChange = event => {
        const newUrlValue = event.target.value;
    
        this.setState({ url: newUrlValue });
      };
    
      handleCreateAnnouncement = () => {
        const body = {
          name: this.state.name,
          description: this.state.description,
          cityState: this.state.cityState,
          price: this.state.price,
          paymentMethod: [
            {
              method: this.state.paymentMethod
            }
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
          url: this.state.url
        };
    
        axios
          .post(
            `https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars`,
            body
          )
          .then(resp => {
            alert("Anúncio criado com sucesso!");
            console.log(resp.data);
            this.setState({
              name: "",
              description: "",
              price: "",
              paymentMethod: "",
              shipping: "",
              year: "",
              exchange: "",
              kilometers: "",
              doors: true,
              color: "",
              fuelType: "",
              airConditioning: true,
              eletricWindows: true,
              electricalLocks: true,
              leatherSeat: true,
              parkingSensor: true,
              parkingCamera: true,
              multimidia: true,
              url: ""
            });
          })
          .catch(error => {
            alert("Ocorreu um erro ao criar o anúncio");
            console.log(error);
          });
      };
    
      render() {
        return (
          <div>
            <h3>Anuncie Aqui!</h3>
            <div>
              <label>Título:</label>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </div>
            <div>
              <label>Descrição:</label>
              <input
                type="text"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
            </div>
            <div>
              <label>Cidade/Estado:</label>
              <input
                type="text"
                value={this.state.cityState}
                onChange={this.handleCityStateChange}
              />
            </div>
            <div>
              <label>Valor de Venda:</label>
              <input
                type="number"
                value={this.state.price}
                onChange={this.handlePriceChange}
              />
            </div>
            <div>
              <label>Método de Pagamento:</label>
              <input
                type="checkbox"
                name="payment"
                value={"aVista"}
                onChange={this.handlePaymentMethodChange}
              />
              <label>À Vista</label>
              <input
                type="checkbox"
                name="payment"
                value={"parcelado"}
                onChange={this.handlePaymentMethodChange}
              />
              <label>Parcelado</label>
              <input
                type="checkbox"
                name="payment"
                value={"financiamento"}
                onChange={this.handlePaymentMethodChange}
              />
              <label>Financiamento</label>
            </div>
            <div>
              <label>Prazo de Entrega:</label>
              <input
                type="number"
                value={this.state.shipping}
                onChange={this.handleShippingChange}
              />
            </div>
            <div>
              <label>Ano Modelo:</label>
              <input
                type="number"
                value={this.state.year}
                onChange={this.handleYearChange}
              />
            </div>
            <div>
              <label>Câmbio:</label>
              <input
                type="radio"
                name="cambio"
                value={"Manual"}
                onChange={this.handleExchangeChange}
              />
              Manual
              <input
                type="radio"
                name="cambio"
                value={"Automatico"}
                onChange={this.handleExchangeChange}
              />
              Automático
            </div>
            <div>
              <label>Km Rodados:</label>
              <input
                type="number"
                value={this.state.kilometers}
                onChange={this.handleKilometersChange}
              />
            </div>
            <div>
              <label>Portas:</label>
              <input
                type="radio"
                name="portas"
                value={"2"}
                onChange={this.handleDoorsChange}
              />{" "}
              2
              <input
                type="radio"
                name="portas"
                value={"4"}
                onChange={this.handleDoorsChange}
              />{" "}
              4
            </div>
            <div>
              <label>Cor:</label>
              <input
                type="text"
                value={this.state.color}
                onChange={this.handleColorChange}
              />
            </div>
            <div>
              <label>Combustível:</label>
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
              <label>Ar Condicionado:</label>
              <input
                type="radio"
                name="ar"
                value={"Sim"}
                onChange={this.handleAirConditioningChange}
              />
              Sim
              <input
                type="radio"
                name="ar"
                value={"Não"}
                onChange={this.handleAirConditioningChange}
              />
              Não
            </div>
            <div>
              <label>Travas Elétricas:</label>
              <input
                type="radio"
                name="travas"
                value={"Sim"}
                onChange={this.handleElectricalLocksChange}
              />
              Sim
              <input
                type="radio"
                name="travas"
                value={"Não"}
                onChange={this.handleElectricalLocksChange}
              />
              Não
            </div>
            <div>
              <label>Vidros Elétricos:</label>
              <input
                type="radio"
                name="vidros"
                value={"Sim"}
                onChange={this.handleEletricWindowsChange}
              />
              Sim
              <input
                type="radio"
                name="vidros"
                value={"Não"}
                onChange={this.handleEletricWindowsChange}
              />
              Não
            </div>
            <hr />
            <h4> Diferenciais </h4>
            <div>
              <label>Bancos de Couro:</label>
              <input
                type="radio"
                name="couro"
                value={"Sim"}
                onChange={this.handleLeatherSeatChange}
              />
              Sim
              <input
                type="radio"
                name="couro"
                value={"Não"}
                onChange={this.handleLeatherSeatChange}
              />
              Não
            </div>
            <div>
              <label>Sensor de Estacionamento:</label>
              <input
                type="radio"
                name="sensor"
                value={"Sim"}
                onChange={this.handleParkingSensorChange}
              />
              Sim
              <input
                type="radio"
                name="sensor"
                value={"Não"}
                onChange={this.handleParkingSensorChange}
              />
              Não
            </div>
            <div>
              <label>Câmera de Estacionamento:</label>
              <input
                type="radio"
                name="camera"
                value={"Sim"}
                onChange={this.handleParkingCameraChange}
              />
              Sim
              <input
                type="radio"
                name="camera"
                value={"Não"}
                onChange={this.handleParkingCameraChange}
              />
              Não
            </div>
            <div>
              <label>Multimidia:</label>
              <input
                type="radio"
                name="midia"
                value={"Sim"}
                onChange={this.handleMultimidiaChange}
              />
              Sim
              <input
                type="radio"
                name="midia"
                value={"Não"}
                onChange={this.handleMultimidiaChange}
              />
              Não
            </div>
            <div>
              <hr />
              <label>URL Foto:</label>
              <input
                type="url"
                id="homepage"
                name="homepage"
                value={this.state.url}
                onChange={this.handleUrlChange}
              />
            </div>
            <button onClick={this.handleCreateAnnouncement} id="submitButton">
              Anunciar
            </button>
            <hr />
            <div>
              {this.state.name}
              {this.state.exchange}
              {this.state.fuelType}
              {this.state.doors}
              {this.state.year}
              {this.state.kilometers}
              {this.state.cityState}
              {this.state.price}
            </div>

          </div>
        );
      }
    }


export default Vender;