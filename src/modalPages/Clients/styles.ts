import styled from 'styled-components';

export const ContainerClient = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    zIndex: 1000;
`

export const Card = styled.div `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 150px;
    border-radius: 19px;
    background-color: #F9F9F9;
    
    box-shadow: 3px 4px 4px rgba(12, 12, 12, 0.25); //#888888

    // height: 45rem;
    // width: 25rem;
    // display: flex;
    // position: absolute;
    // visibility: visible;
    
    // width: 100%;
    // height: 100%;
`

export const InputArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
