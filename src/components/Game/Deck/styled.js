import styled from 'styled-components';

export const DeckContainer =  styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 170px;
    @media (max-width: 700px) {
        width: 130px;
    }
    @media (max-width: 540px) {
        width: 90px;
    }
    @media (max-width: 400px) {
        width: 80px;
    }
`;

export const EmptyDeck = styled.div`
    width: 80px;
    height: 110px;
    background-color: #389e38;
    border-radius: 4px;
    display: block;
    @media (max-width: 700px) {
        width: 60px;
        height: 90px;
    }
    @media (max-width: 540px) {
        width: 40px;
        height: 55px;
    }
    @media (max-width: 400px) {
        width: 37px;
        height: 50px;
    }
`;

export const EmptyCard = styled.div`
    width: 80px;
    height: 110px;
    background-color: transparent;
    border-radius: 4px;
    display: block;
    @media (max-width: 700px) {
        width: 60px;
        height: 90px;
    }
    @media (max-width: 540px) {
        width: 40px;
        height: 55px;
    }
    @media (max-width: 400px) {
        width: 37px;
        height: 50px;
    }
`;