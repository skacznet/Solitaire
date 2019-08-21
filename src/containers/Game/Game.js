import React, { useState, useEffect } from 'react';

import { generateCards } from '../../shared/gameLogic';

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
        setPilesCards(() => {
            let piles = [[], [], [], [], [], [], []];
            let count = 0;
            for(let i=0; i<7; i++) {
                for(let j=0; j<=i; j++) {
                    let hidden = true;
                    if(j == i) {
                        hidden = false;
                    }
                    piles[i].push({
                        ...cards[count],
                        hidden: hidden
                    });
                    count++;
                }
            }
            return piles;
        });
        setDeckCards(() => {
            let deck = [];
            for(let i = 28; i<52; i++) {
                deck.push({
                    ...cards[i]
                });
            }
            return deck;
        });
    }, []);

    let content = '';

    if(deckCards.length) {
        content =   <div>
                        <Styled.TopContent>
                            <Foundations cards={foundationsCards} />
                            <DeckContainer cards={deckCards} activeCard={activeDeckCard} />
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