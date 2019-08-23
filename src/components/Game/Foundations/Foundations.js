import React from 'react';
import Foundation from './Foundation';

import * as Styled from './styled';

const Foundations = props => {

    let foundations = [];
    for(let i = 0; i<4; i++) {
        foundations.push(<Foundation key={i} id={i} cards={props.cards[i]} />);
    }

    return (
        <Styled.FoundationsContainer>
            {foundations}
        </Styled.FoundationsContainer>
    );
}

export default Foundations;