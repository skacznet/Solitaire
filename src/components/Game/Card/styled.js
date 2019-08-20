import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    width: 70px;
    height: 100px;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 4px;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 3px;
    cursor: pointer;
    font-weight: 700;
    margin: 30px;
    color: ${props => {
        switch(props.color) {
            case 0: return '#000';
            case 1: return 'red';
            default: return '#000';
        }
    }};
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