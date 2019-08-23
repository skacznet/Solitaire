import React from 'react';

import Deck from './Deck';
import ActiveCard from './ActiveCard';

import * as Styled from './styled';

const DeckContainer = props => {

    const activeCardIndex = props.activeCard;
    let activeCard = null;
    let deck = null;
    if(props.cards.length > 0) {
        activeCard = <ActiveCard cardMouseDown={props.cardMouseDown} card={props.cards[activeCardIndex]} />;
    }
    if(props.cards.length > 1) {
        deck = <Deck deckClicked={props.deckClicked} />;
    }

    return (
        <Styled.DeckContainer>
            {activeCard}
            {deck}
        </Styled.DeckContainer>
    );
}

export default DeckContainer;