import React, { useState, useEffect } from 'react';
import * as Styled from './styled';

const Modal = props => {

    const [show, setShow] = useState(false);
    
    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    return (
        <Styled.ModalContainer show={show}>
            <Styled.Modal show={show}>
                <Styled.Heading>You've won!</Styled.Heading>;
                <Styled.Content>Congratulations! Would you like to play once again?</Styled.Content>;
                <Styled.Button onClick={props.onResetButtonClick}>Restart</Styled.Button>
            </Styled.Modal>
        </Styled.ModalContainer>
    )
}

export default Modal;