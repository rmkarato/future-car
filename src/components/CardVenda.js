import React from "react";
import styled from "styled-components";

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

function CardVenda(props) {
  return (
    <Card>
      <PhotoCar src={props.url} />
      <h2>{props.name}</h2>
      <p>{props.shipping}</p>
      <p>{props.fuel}</p>
      <p>{props.doors}</p>
      <p>
        {props.year} | {props.kilometers}
      </p>
      <p>R$ {props.price}</p>
    </Card>
  );
}

export default CardVenda;
