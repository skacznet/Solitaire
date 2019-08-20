import React, { useState } from 'react';

import { generateCards } from '../../shared/gameLogic';

import Card from '../../components/Game/Card/Card';

const Game = props => {

    const [cards, setCards] = useState(generateCards());

    const cardsList = cards.map((el, i) => (
        <Card key={el.id} color={el.color} type={el.type} value={el.value} />
    ));

    return (
        <>
            <h1>Game</h1>
            { cardsList }
        </>
    )
}

export default Game;