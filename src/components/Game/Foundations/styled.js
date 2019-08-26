import styled from 'styled-components';

export const Foundation = styled.div`
    position: relative;
    width: 80px;
    height: 110px;
    background-color: #389e38;
    border-radius: 4px;
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

export const FoundationsContainer = styled.div`
    display: flex;
    width: 350px;
    justify-content: space-between;
    @media (max-width: 700px) {
        width: 270px;
    }
    @media (max-width: 540px) {
        width: 190px;
    }
    @media (max-width: 400px) {
        width: 170px;
    }
`;