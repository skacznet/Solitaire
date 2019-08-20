import React from 'react';

import * as Styled from './styled';

import { GiHearts, GiSpades, GiDiamonds, GiClubs } from "react-icons/gi";

const Card = props => {

    let cardValue = '';
    
    switch(props.value) {
        case 11: cardValue = 'J'; break;
        case 12: cardValue = 'Q'; break;
        case 13: cardValue = 'K'; break;
        case 14: cardValue = 'A'; break;
        default: cardValue = props.value;
    }

    let cardSymbol = '';

    switch(props.type) {
        case 0: cardSymbol = <GiSpades />; break;
        case 1: cardSymbol = <GiHearts />; break;
        case 2: cardSymbol = <GiClubs />; break;
        case 3: cardSymbol = <GiDiamonds />; break;
    }
    
    return (
        <Styled.Card color={props.color}>
            <Styled.TopContent>
                <Styled.Value>{cardValue}</Styled.Value>
                {cardSymbol}
            </Styled.TopContent>
            <Styled.BottomContent>
                {cardSymbol}
            </Styled.BottomContent>
        </Styled.Card>
    );
};

export default Card;