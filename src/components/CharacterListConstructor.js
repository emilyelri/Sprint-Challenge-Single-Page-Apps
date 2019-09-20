import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import CharacterList from './CharacterList';

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

    return (
        <Page>
            <Grid>
                <CharacterList className="grid-view" />
            </Grid>
            <Link to={"/"}>Return Home</Link>
        </Page>
    )
}