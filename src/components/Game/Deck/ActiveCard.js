import React from 'react';
import Card from '../Card/Card';

const ActiveCard = props => {

    const card = <Card key={props.card.id} value={props.card.value} color={props.card.color} type={props.card.type} />;

    return (
        <>
            { card }
        </>
    );
}

export default ActiveCard;