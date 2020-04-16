import React from 'react';
import styled from 'styled-components';

export default function Navi(props) {

    const Buttons = styled.div`
        width: 100%;
        text-align: center;
    `;

    const Button = styled.button`
    width: 15%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 30px 15px;
    `;

  return (
      <Buttons>
        <Button>Previous</Button>
        <Button>Next</Button>
      </Buttons>
  )
}
