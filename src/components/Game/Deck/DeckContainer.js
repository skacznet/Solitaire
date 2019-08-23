import React from 'react';

import Deck from './Deck';
import ActiveCard from './ActiveCard';

import * as Styled from './styled';

const DeckContainer = props => {

    const activeCard = props.activeCard;

    return (
        <Styled.DeckContainer>
            <ActiveCard cardMouseDown={props.cardMouseDown} card={props.cards[activeCard]} />
            <Deck deckClicked={props.deckClicked} />
        </Styled.DeckContainer>
    );
}

export default DeckContainer;