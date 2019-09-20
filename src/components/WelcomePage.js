import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function WelcomePage() {

  const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Header = styled.div`
    text-align: center;
  `;

  const Image = styled.img`
    border: 2px solid black;
    margin: 50px;
  `;

  const CharLink = styled.span`
    font-size: 2rem;
    margin: 50px 20px;
  `;

  return (
    <Welcome>
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Image
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Header>
      <Link to={"/characters"}><CharLink>Character List</CharLink></Link>
    </Welcome>
  );
}
