import React from 'react';

import { Card, Container, InputArea } from './style';
import { Title } from '../../Global/styles'
import { Link } from 'react-router-dom';
import ButtonCustom from '../../components/Button/ButtonCustom';
import InputCustom from '../../components/Input/InputCustom';

const Login = () => {
    const handleAuthenticate = () => {

    }

    return (
        <Container>
            <Card>
                <Title>Temisto</Title>

                <InputArea autoComplete="off" >
                    <InputCustom label="Usuário"  />

                    <InputCustom label="Senha" type="password" />
                    
                    <Link to="/">
                        <ButtonCustom label="Entrar" typeButton="submit" />
                    </Link>
                </InputArea>
            </Card>
        </Container>
    )
}

export default Login;
