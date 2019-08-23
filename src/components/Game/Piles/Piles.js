import React from 'react';
import Pile from './Pile';
import * as Styled from './styled';

const Piles = props => {

    let piles = [];

    for(let i=0; i<7; i++) {
        piles.push(<Pile cardMouseDown={props.cardMouseDown} id={i} key={i} cards={props.cards[i]} />);
    }

    return (
        <Styled.PilesContainer>
            { piles }
        </Styled.PilesContainer>
    );
}

export default Piles;