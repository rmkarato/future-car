import React from "react";
import styled from "styled-components";
import axios from "axios";

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

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin: auto;
  border: solid 1px black;
  align-items: center;
  justify-content: center;
`;

class CardVenda extends React.Component {
  state = {
    cars: [],
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

  render() {
    return (
      <Grid>
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
      </Grid>
    );
  }
}

export default CardVenda;
