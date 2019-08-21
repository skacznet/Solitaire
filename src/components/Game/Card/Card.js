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
        default: cardSymbol = '';
    }

    let content =   <Styled.Card color={props.color} zindex={props.zindex}>
                        <Styled.TopContent>
                            <Styled.Value>{cardValue}</Styled.Value>
                            {cardSymbol}
                        </Styled.TopContent>
                        <Styled.BottomContent>
                            {cardSymbol}
                        </Styled.BottomContent>
                    </Styled.Card>;

    if(props.hidden === true) {
        content = <Styled.CardDown zindex={props.zindex} />;
    }
    
    return (
        <>
            { content }
        </>
    );
};

export default Card;