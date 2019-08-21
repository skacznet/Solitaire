import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 80px;
    height: 110px;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 4px;
    padding: 5px;
    box-shadow: rgba(0,0,0,0.15) 0 1px 3px 2px;
    cursor: pointer;
    font-weight: 700;
    z-index: ${props => {
        switch(props.zindex) {
            case 1: return '1';
            case 2: return '2';
            case 3: return '3';
            case 4: return '4';
            case 5: return '5';
            case 6: return '6';
            case 7: return '7';
            default: return '1';
        }
    }};
    top: ${props => {
        switch(props.zindex) {
            case 1: return '0';
            case 2: return '-90px';
            case 3: return '-180px';
            case 4: return '-270px';
            case 5: return '-360px';
            case 6: return '-450px';
            case 7: return '-540px';
            default: return '1';
        }
    }};
    color: ${props => {
        switch(props.color) {
            case 0: return '#000';
            case 1: return 'red';
            default: return '#000';
        }
    }};
`;

export const CardDown = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 80px;
    height: 110px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: rgba(0,0,0,0.15) 0 1px 3px 2px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    z-index: ${props => {
        switch(props.zindex) {
            case 1: return '1';
            case 2: return '2';
            case 3: return '3';
            case 4: return '4';
            case 5: return '5';
            case 6: return '6';
            case 7: return '7';
            default: return '1';
        }
    }};
    top: ${props => {
        switch(props.zindex) {
            case 1: return '0';
            case 2: return '-90px';
            case 3: return '-180px';
            case 4: return '-270px';
            case 5: return '-360px';
            case 6: return '-450px';
            case 7: return '-540px';
            default: return '1';
        }
    }};
    ::after {
        content: '';
        background-color: #2196f3;
        width: 70px;
        height: 100px;
        border-radius: 4px;
    }
`;

export const TopContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BottomContent = styled.div`
    display: flex;
    justify-content: center;
    svg {
        width: 3em;
        height: 3em;
    }
`;

export const Value = styled.div`
    font-size: 24px;
    line-height: 1;
`;