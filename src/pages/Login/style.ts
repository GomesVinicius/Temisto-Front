import styled from 'styled-components'

export const Container = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;

    justify-content: center;
    align-items: center;
`

export const Card = styled.div `
    height: 45rem;
    width: 25rem;
    border-radius: 19px;
    background-color: #F9F9F9;

    box-shadow: 3px 4px 4px rgba(12, 12, 12, 0.25); //#888888
`

export const InputArea = styled.form `
    display: flex;
    height: 55%;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`
