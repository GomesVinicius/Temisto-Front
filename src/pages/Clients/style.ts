import styled from 'styled-components';

interface ContainerProps {
    transparent: string;
}

export const Container = styled.div<ContainerProps> `
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    background-color: ${props => `${props.transparent}`};

    transition: 0.2s;
`
