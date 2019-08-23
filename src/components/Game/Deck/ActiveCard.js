import React from 'react';
import Card from '../Card/Card';

const ActiveCard = props => {

    const card = <Card sourceType={'deck'} cardMouseDown={props.cardMouseDown} id={props.card.id} value={props.card.value} color={props.card.color} type={props.card.type} zindex={1} translateX={props.translateX} translateY={props.translateY} />;

    return (
        <>
            { card }
        </>
    );
}

export default ActiveCard;