import styled from 'styled-components';

export const TopContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const GameContent = styled.div`
    padding: 30px;
    max-width: 620px;
    margin: auto;
    @media (max-width: 700px) {
        width: 480px;
    }
    @media (max-width: 540px) {
        width: 340px;
        padding: 15px;
    }
    @media (max-width: 400px) {
        width: 305px;
        padding: 5px;
    }
`;