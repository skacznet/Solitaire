import React, { useState, useEffect } from 'react';

import { generateCards, generateDeckCards, generatePilesCards } from '../../shared/gameLogic';
import { pointInRectangle } from '../../shared/helpers';

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
        if(cards !== undefined) {
            setPilesCards(generatePilesCards(cards));
            setDeckCards(generateDeckCards(cards));
            setFoundationsCards([[],[],[],[]]);
        }
    }, []);

    const onDeckClickHandler = () => {
        if(deckCards[activeDeckCard + 1] !== undefined) {
            setActiveDeckCard(activeDeckCard+1);
        } else {
            setActiveDeckCard(0);
        }
    }

    let content = '';

    const onCardMouseDown = (event, cardData) => {
        document.movedCardElement = event.target;
        document.movedCardData = cardData;
        let cardsToMove = [];
        if(cardData.sourceType === 'pile') {
            let i = cardData.position;
            while(pilesCards[cardData.source][i] !== undefined) {
                cardsToMove.push(document.getElementById('card-' + pilesCards[cardData.source][i].id));
                i++;
            }
        } else if(cardData.sourceType === 'deck') {
            cardsToMove.push(document.getElementById('card-' + cardData.id));
        } else if(cardData.sourceType === 'foundation') {
            cardsToMove.push(document.getElementById('card-' + foundationsCards[cardData.source][foundationsCards[cardData.source].length - 1].id));
        }
        document.cardsToMoveElements = cardsToMove;
        document.xPos = event.pageX;
        document.yPos = event.pageY;
        document.cardWidth = event.target.scrollWidth;
        document.addEventListener('mousemove', onMoveCard, false);
    }

    const onMoveCard = (event) => {
        const posX = event.pageX - document.xPos;
        const posY = event.pageY - document.yPos;
        document.cardsToMoveElements.forEach((el, i) => {
            el.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
            el.style.zIndex = 999 + i;
        });
        document.addEventListener('mouseup', onCardMouseUp, false);
    }

    const moveToPile = (destPile, sourceType, source) => {
        let pilesCardsCopy = [[], [], [], [], [], [], []];
        for (let i=0; i<7; i++) {
            for(let j=0; j<pilesCards[i].length; j++) {
                pilesCardsCopy[i].push({
                    ...pilesCards[i][j]
                });
            }
        }
        if(sourceType === 'pile') {
            for(let i=document.cardsToMoveElements.length; i>0; i--) {
                pilesCardsCopy[destPile][pilesCardsCopy[destPile].length] = pilesCardsCopy[source][pilesCardsCopy[source].length - i];
            }
            for(let i=document.cardsToMoveElements.length; i>0; i--) {
                pilesCardsCopy[source].pop();
            }
            if(pilesCardsCopy[source][pilesCardsCopy[source].length - 1] !== undefined) {
                pilesCardsCopy[source][pilesCardsCopy[source].length - 1].hidden = false;
            }
        } else if(sourceType === 'deck') {
            let deckCardsCopy = [];
            deckCards.forEach((el, i) => {
                deckCardsCopy.push({...el});
            });
            pilesCardsCopy[destPile][pilesCardsCopy[destPile].length] = {...deckCards[activeDeckCard]};
            const activeIndex = activeDeckCard;
            deckCardsCopy.splice(activeIndex, 1);
            if(deckCards[activeIndex-1] !== undefined) {
                setActiveDeckCard(activeIndex-1);
            } else {
                setActiveDeckCard(0);
            }
            setDeckCards(deckCardsCopy);
        } else if(sourceType === 'foundation') {
            let foundationsCardsCopy = [[], [], [], []];
            for (let i=0; i<4; i++) {
                for(let j=0; j<foundationsCards[i].length; j++) {
                    foundationsCardsCopy[i][j] = {
                        ...foundationsCards[i][j]
                    }
                }
            }
            pilesCardsCopy[destPile][pilesCardsCopy[destPile].length] = {...foundationsCards[source][foundationsCards[source].length - 1]};
            foundationsCardsCopy[source].pop();
            setFoundationsCards(foundationsCardsCopy);
        }

        setPilesCards(pilesCardsCopy);
    }

    const moveToFoundation = (f, sourceType, source) => {

        let foundationsCardsCopy = [[], [], [], []];
        for (let i=0; i<4; i++) {
            for(let j=0; j<foundationsCards[i].length; j++) {
                foundationsCardsCopy[i][j] = {
                    ...foundationsCards[i][j]
                }
            }
        }

        if(sourceType === 'pile') {
            const card = {
                ...pilesCards[source][pilesCards[source].length - 1]
            }

            let pilesCardsCopy = [[], [], [], [], [], [], []];
            for (let i=0; i<7; i++) {
                for(let j=0; j<pilesCards[i].length; j++) {
                    pilesCardsCopy[i].push({
                        ...pilesCards[i][j]
                    });
                }
            }

            foundationsCardsCopy[f].push(card);
            pilesCardsCopy[source].pop();
            if(pilesCardsCopy[source][pilesCardsCopy[source].length - 1] !== undefined) {
                pilesCardsCopy[source][pilesCardsCopy[source].length - 1].hidden = false;
            }
            setFoundationsCards(foundationsCardsCopy);
            setPilesCards(pilesCardsCopy);
        } else if(sourceType === 'deck') {
            const card = {...deckCards[activeDeckCard]};
            let deckCardsCopy = [];
            deckCards.forEach((el, i) => {
                deckCardsCopy.push({...el});
            });
            foundationsCardsCopy[f].push(card);

            const activeIndex = activeDeckCard;
            deckCardsCopy.splice(activeIndex, 1);
            if(deckCards[activeIndex-1] !== undefined) {
                setActiveDeckCard(activeIndex-1);
            } else {
                setActiveDeckCard(0);
            }
            setDeckCards(deckCardsCopy);
            setFoundationsCards(foundationsCardsCopy);
        } else if (sourceType === 'foundation') {
            const card = {...foundationsCards[source][foundationsCards[source].length - 1]};
            foundationsCardsCopy[f].push(card);
            foundationsCardsCopy[source].pop();
            setFoundationsCards(foundationsCardsCopy);
        }
    }

    const onCardMouseUp = (event) => {
        document.removeEventListener('mousemove', onMoveCard, false);
        document.removeEventListener('mouseup', onCardMouseUp, false);
        let pile = {};
        let moveToPileCheck = false;
        //let moveToFoundationCheck = false;
        for(let i=0; i<7; i++) {
            pile = document.getElementById('pile-' + i);
            if(pointInRectangle(event.pageX, event.pageY, pile.offsetLeft, pile.offsetTop, document.cardWidth, pile.scrollHeight)) {
                if(pilesCards[i].length > 0) {
                    const cardOnPileColor = pilesCards[i][pilesCards[i].length - 1].color;
                    const cardOnPileValue = pilesCards[i][pilesCards[i].length - 1].value;
                    if((document.movedCardData.color !== cardOnPileColor) && ((document.movedCardData.value + 1) === cardOnPileValue) && (cardOnPileValue !== 14)) {
                        moveToPileCheck = true;
                        moveToPile(i, document.movedCardData.sourceType, document.movedCardData.source);
                        i = 7;
                    }
                } else {
                    if(document.movedCardData.value === 13) {
                        moveToPileCheck = true;
                        moveToPile(i, document.movedCardData.sourceType, document.movedCardData.source);
                        i = 7;
                    }
                }
            }
        }
        if(!moveToPileCheck) {
            let f = {};
            for(let i=0; i<4; i++) {
                f = document.getElementById('f-' + i);
                if(document.cardsToMoveElements.length === 1) {
                    if(pointInRectangle(event.pageX, event.pageY, f.offsetLeft, f.offsetTop, f.scrollWidth, f.scrollHeight)) {
                        if(foundationsCards[i].length > 0) {
                            if((foundationsCards[i][foundationsCards[i].length-1].value === 14) && (document.movedCardData.value === 2)) {
                                //moveToFoundationCheck = true;
                                moveToFoundation(i, document.movedCardData.sourceType, document.movedCardData.source);
                                i = 4;
                            } else if((foundationsCards[i][foundationsCards[i].length-1].type === document.movedCardData.type) && ((foundationsCards[i][foundationsCards[i].length-1].value + 1) === document.movedCardData.value)) {
                                //moveToFoundationCheck = true;
                                moveToFoundation(i, document.movedCardData.sourceType, document.movedCardData.source);
                                i = 4;
                            }
                        } else {
                            if(document.movedCardData.value === 14) {
                                //moveToFoundationCheck = true;
                                moveToFoundation(i, document.movedCardData.sourceType, document.movedCardData.source);
                                i = 4;
                            }
                        }
                    }
                }
            }
        }

        //if(!moveToPileCheck && !moveToFoundationCheck) {
            document.cardsToMoveElements.forEach((el, i) => {
                el.style.transform = null;
                el.style.zIndex = null;
            });
        //}
    }

    if(deckCards.length || pilesCards.length || foundationsCards.length) {
        content =   <div>
                        <Styled.TopContent>
                            <Foundations cardMouseDown={onCardMouseDown} cards={foundationsCards} />
                            <DeckContainer cardMouseDown={onCardMouseDown} cards={deckCards} activeCard={activeDeckCard} deckClicked={onDeckClickHandler} />
                        </Styled.TopContent>
                        <Piles cardMouseDown={onCardMouseDown} cards={pilesCards} />
                    </div>;
    }

    return (
        <>
            { content }
        </>
    )
}

export default Game;