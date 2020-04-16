import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [api, setAPI] = useState('https://rickandmortyapi.com/api/character/');
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');

  const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

  const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  `;

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

  useEffect(() => {
    axios
    .get(api)
    .then(response => {
      setCharacters(response.data.results);
      setNext(response.info.next);
      setPrev(response.info.prev);
    })
    .catch(error => {
      console.log(error)
    })
  }, [api]);

  useEffect(() => {
    const results = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
      setCharacters(searchResults);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <Page>

      <div>
        <form>
          <label for="name">Search:</label>
          <input
            id="name"
            type="text"
            name="textfield"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </div>

      <Grid> 
        {
          characters.map(character =>
            <CharacterCard
              id={character.id}
              imageSrc={character.image}
              name={character.name} 
              status={character.status}
              species={character.species}
              gender={character.gender}
              location={character.location}
              origin={character.origin}
            />
          )
        }
      </Grid>

      <Buttons>
        <Button /*onClick={setAPI(prev)}*/>Previous</Button>
        <Button /*onClick={setAPI(next)}*/>Next</Button>
      </Buttons>
    </Page>
)}