import styled from 'styled-components';

export const TopbarContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    background-color: #1e6d1e;
    margin-bottom: 30px;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    @media (max-width: 540px) {
        padding: 0 15px;
        margin-bottom: 15px;
    }
`;

export const Button = styled.span`
    cursor: pointer;
    display: inline-block;
    padding: 20px 15px;
    color: #1e6d1e;
    background-color: #fff;
    box-shadow: rgba(0,0,0,0.15) 0 1px 3px 2px;
    transition: all 0.2s ease-in-out;
    line-height: 0;
    border-radius: 4px;
    font-size: 14px;
    user-select: none;
    :hover {
        background-color: #eee;
    }
`;