import styled from 'styled-components';

export const Modal = styled.div`
    position: relative;
    padding: 45px;
    background-color: #fff;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    text-align: center;
    margin: 30px;
    pointer-events: ${props => {
        if(props.show) {
            return 'all';
        } else {
            return 'none';
        }
    }};
    opacity: ${props => {
        if(props.show) {
            return '1';
        } else {
            return '0';
        }
    }};
    top: ${props => {
        if(props.show) {
            return '0';
        } else {
            return '-200px';
        }
    }};
    @media(max-width: 500px) {
        padding: 30px;
    }
`;

export const ModalContainer = styled.div`
    position: fixed;
    z-index: 9999;
    background-color: rgba(0,0,0,0.8);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease-in-out;
    opacity: ${props => {
        if(props.show) {
            return '1';
        } else {
            return '0';
        }
    }};
    pointer-events: ${props => {
        if(props.show) {
            return 'all';
        } else {
            return 'none';
        }
    }};
`;

export const Heading = styled.h2`
    margin-top: 0;
    text-align: center;
    font-size: 42px;
    color: #000;
    margin-bottom: 0;
    @media(max-width: 500px) {
        font-size: 28px;
    }
`;

export const Content = styled.p`
    margin-top: 0;
    text-align: center;
    font-size: 18px;
    color: #000;
    margin-bottom: 0;
`;

export const Button = styled.span`
    cursor: pointer;
    display: inline-block;
    padding: 25px 20px;
    color: #fff;
    background-color: #2196f3;
    box-shadow: rgba(0,0,0,0.15) 0 1px 3px 2px;
    transition: all 0.2s ease-in-out;
    line-height: 0;
    margin: 20px 0 0 0;
    border-radius: 4px;
    font-size: 18px;
    user-select: none;
    :hover {
        background-color: #167cce;
    }
`;