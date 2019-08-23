import styled from 'styled-components';

export const CardContainer = styled.div`
    position: relative;
    margin-top: ${props => {
        if(props.removeMargin) {
            return '-110px';
        } else if(props.zindex === 1) {
            return 0;
        } else {
            return '-80px';
        }
    }};
    z-index: ${props => {
        return props.zindex;
    }};
    transform: ${props => {
        return 'translate(' + props.translateX + 'px, ' + props.translateY + 'px)';
    }};
`;

export const Card = styled.div`
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
    pointer-events: none;
    font-weight: 700;
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
        return props.zindex;
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
    pointer-events: none;
`;

export const BottomContent = styled.div`
    display: flex;
    justify-content: center;
    pointer-events: none;
    svg {
        width: 3em;
        height: 3em;
    }
`;

export const Value = styled.div`
    font-size: 24px;
    user-select: none;
    line-height: 1;
    pointer-events: none;
`;