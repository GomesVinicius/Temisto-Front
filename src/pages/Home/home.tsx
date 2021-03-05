import React from 'react';
import { SessionName } from '../../Utils/utils';
import { Container, Text } from './style';

function Home() {
    return (
        <>
            <Container>
                <Text>Bem vindo <span>{SessionName()}</span></Text>
            </Container>
        </>
    )
}

export default Home
