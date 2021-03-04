import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 20px 20px;
    height: 76px;
    width: 76px;
    background-color: #CACACA;
    border-radius: 50%;

    cursor: pointer;

    transition: 0.4s;

    :hover {
        transform: rotate(180deg);
    }
`

export const Icon = styled.div`
    margin: 0;
    padding: 0;
    outline: 0;
    height: 68%;
    width: 68%;

    border: 3.3px solid black;
    border-radius: 50%;
`

export const Text = styled.span`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 52pt;
    font-weight: 500;
`