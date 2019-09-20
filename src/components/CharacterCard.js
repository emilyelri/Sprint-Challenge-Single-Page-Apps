import React from 'react';
import styled from 'styled-components';

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.imageSrc} />
      <h2>{props.name}</h2>
    </div>
  );
}
