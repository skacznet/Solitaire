import React from 'react';
import Card from '../Card/Card';
import * as Styled from './styled';

const Pile = props => {

    const cards = props.cards.map((el, i) => {
        return (
            <Card key={el.id} value={el.value} color={el.color} type={el.type} hidden={el.hidden} zindex={i+1} />
        )
    });

    return (
        <Styled.Pile>{ cards }</Styled.Pile>
    );
}

export default Pile;