import React from 'react';
import Card from '../Card/Card';
import * as Styled from './styled';

const Pile = props => {

    const cards = props.cards.map((el, i) => (
        <Card cardMouseDown={props.cardMouseDown} sourceType={'pile'} source={props.id} key={i} id={el.id} value={el.value} color={el.color} type={el.type} hidden={el.hidden} zindex={i+1} translateX={el.translateX} translateY={el.translateY} />
    ));

    return (
        <Styled.Pile id={'pile-' + props.id}>
            { cards }
        </Styled.Pile>
    );
}

export default Pile;