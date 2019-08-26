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

    const cardData = {id: props.id, color: props.color, hidden: props.hidden, type: props.type, value: props.value, sourceType: props.sourceType, source: props.source, position: props.zindex - 1};

    let content =   <Styled.CardContainer removeMargin={props.removeMargin} className={'card'} id={'card-' + props.id} translateX={props.translateX} translateY={props.translateY} zindex={props.zindex} onTouchStart={(event) => props.cardMouseDown(event, cardData)} onMouseDown={(event) => props.cardMouseDown(event, cardData)}>
                        <Styled.Card color={props.color} zindex={props.zindex}>
                            <Styled.TopContent>
                                <Styled.Value>{cardValue}</Styled.Value>
                                {cardSymbol}
                            </Styled.TopContent>
                            <Styled.BottomContent>
                                {cardSymbol}
                            </Styled.BottomContent>
                        </Styled.Card>
                    </Styled.CardContainer>

    if(props.hidden === true) {
        content = <Styled.CardContainer id={'card-' + props.id} zindex={props.zindex}><Styled.CardDown zindex={props.zindex} /></Styled.CardContainer>;
    }
    
    return (
        <>
            { content }
        </>
    );
};

export default Card;