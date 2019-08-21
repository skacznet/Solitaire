import React from 'react';

import Card from '../Card/Card';
import Deck from './Deck';
import ActiveCard from './ActiveCard';

import * as Styled from './styled';

const DeckContainer = props => {

    const activeCard = props.activeCard;

    return (
        <Styled.DeckContainer>
            <ActiveCard card={props.cards[activeCard]} />
            <Deck deckClicked={props.deckClicked} />
        </Styled.DeckContainer>
    );
}

export default DeckContainer;