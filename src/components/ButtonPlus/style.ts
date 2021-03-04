import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 15px 15px;
    height: 76px;
    width: 76px;
    background-color: gray;
    border-radius: 50%;
`

export const Icon = styled.div`
    margin: 0;
    padding: 0;
    outline: 0;
    height: 80%;
    width: 80%;

    border: 3px solid black;
    border-radius: 50%;
`

export const Text = styled.span`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 72px;
`