import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function CharacterCard(props) {

  const location = props.location.name;
  const origin = props.origin.name;

  const Card = styled.div`
    text-align: center;
    width: 27%;  
    margin: 20px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  `;

  const Profile = styled.img`
    width: 100%;
  `;

  // useEffect(() =>
  //   axios.get(location)
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // );

  return (
    <Card>
      <Profile src={props.imageSrc} />
      <h2>{props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>Current Location: {location}</p>
      <p>Place of Origin: {origin}</p>
    </Card>
  );
}
