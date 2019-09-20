import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [person, setPerson] = useState({});
  const [characters, setCharacters] = useState([]);
  const [api, setAPI] = useState('https://rickandmortyapi.com/api/character/');

  useEffect(() => {
    axios
    .get(api)
    .then(response => {
      console.log(response.data.results);
      setCharacters(response.data.results);
    })
    .catch(error => console.log(error))
  }, [api]);

  return (
    characters.map(character =>
      <CharacterCard
        id={character.id}
        imageSrc={character.image}
        name={character.name} 
        status={character.status}
        species={character.species}
        gender={character.gender}
        location={character.location}
        origin={character.origin}/>
    )
  )
}