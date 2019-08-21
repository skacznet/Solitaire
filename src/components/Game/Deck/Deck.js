import React from 'react';
import * as Styled from '../Card/styled';

const Deck = props => {
    return (
        <Styled.CardDown onClick={props.deckClicked} />
    );
}

export default Deck;