import styled from 'styled-components';

export const Pile = styled.div`
    position: relative;
    width: 80px;
    padding-bottom: 110px;
    ::after {
        content: '';
        width: 80px;
        height: 110px;
        background-color: #389e38;
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
    }
    @media (max-width: 700px) {
        width: 60px;
        padding-bottom: 90px;
        ::after {
            width: 60px;
            height: 90px;
        }
    }
    @media (max-width: 540px) {
        width: 40px;
        padding-bottom: 55px;
        ::after {
            width: 40px;
            height: 55px;
        }
    }
    @media (max-width: 400px) {
        width: 37px;
        padding-bottom: 50px;
        ::after {
            width: 37px;
            height: 50px;
        }
    }
`;

export const PilesContainer = styled.div`
    display: flex;
    width: 620px;
    justify-content: space-between;
    margin-top: 60px;
    @media (max-width: 700px) {
        width: 480px;
    }
    @media (max-width: 540px) {
        width: 340px;
        margin-top: 30px;
    }
    @media (max-width: 400px) {
        width: 305px;
        margin-top: 25px;
    }
`;