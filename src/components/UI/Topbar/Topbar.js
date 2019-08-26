import React from 'react';

import * as Styled from './styled';

const Topbar = props => {
    return (
        <Styled.TopbarContainer>
            <h3>Solitaire</h3>
            <Styled.Button onClick={props.onResetButtonClick}>Restart</Styled.Button>
        </Styled.TopbarContainer>
    );
}

export default Topbar;