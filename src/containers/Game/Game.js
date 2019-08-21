import React, { useState, useEffect } from 'react';

import { generateCards, generateDeckCards, generatePilesCards } from '../../shared/gameLogic';

import Foundations from '../../components/Game/Foundations/Foundations';
import DeckContainer from '../../components/Game/Deck/DeckContainer';
import Piles from '../../components/Game/Piles/Piles';

import * as Styled from './styled';

const Game = props => {

    const [cards, setCards] = useState(generateCards());
    const [deckCards, setDeckCards] = useState([]);
    const [pilesCards, setPilesCards] = useState([]);
    const [foundationsCards, setFoundationsCards] = useState([]);
    const [activeDeckCard, setActiveDeckCard] = useState(0);

    useEffect(() => {
        setPilesCards(generatePilesCards(cards));
        setDeckCards(generateDeckCards(cards));
    }, [cards]);

    const onDeckClickHandler = () => {
        if(deckCards[activeDeckCard + 1] !== undefined) {
            setActiveDeckCard(activeDeckCard+1);
        } else {
            setActiveDeckCard(0);
        }
    }

    let content = '';

    if(deckCards.length || pilesCards.length || foundationsCards.length) {
        content =   <div>
                        <Styled.TopContent>
                            <Foundations cards={foundationsCards} />
                            <DeckContainer cards={deckCards} activeCard={activeDeckCard} deckClicked={onDeckClickHandler} />
                        </Styled.TopContent>
                        <Piles cards={pilesCards} />
                    </div>;
    }

    return (
        <>
            { content }
        </>
    )
}

export default Game;