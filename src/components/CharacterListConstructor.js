import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import CharacterList from './CharacterList';
import Navi from './Navi';

export default function() {

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

    const characters = CharacterList.characters;
    
    return (
        <Page>
            <SearchForm characters={characters} />
            <Grid>
            <CharacterList className="grid-view" />
            </Grid>
            <Navi />
            <Link to={"/"}>Return Home</Link>
        </Page>
    )
}