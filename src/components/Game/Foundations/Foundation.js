import React from 'react';
import * as Styled from './styled';

import Card from '../Card/Card';

const Foundation = props => {
    
    const cards = props.cards.map((el, i) => {
        const marginCheck = (i === 0) ? false : true;
        return (
            <Card removeMargin={marginCheck} id={el.id} key={i} color={el.color} type={el.type} value={el.value} hidden={el.hidden} zindex={i+1} translateX={el.translateX} translateY={el.translateY} source={props.id} sourceType={'foundation'} />
        )
    });

    return (
        <Styled.Foundation id={'f-' + props.id}>
            {cards}
        </Styled.Foundation>
    );
}

export default Foundation;