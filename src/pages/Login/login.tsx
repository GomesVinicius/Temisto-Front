import React, { useState } from 'react';

import { Card, Container, InputArea } from './style';
import { Title } from '../../Global/styles'
import { Link, useHistory } from 'react-router-dom';
import ButtonCustom from '../../components/Button/ButtonCustom';
import InputCustom from '../../components/Input/InputCustom';

const Login = () => {
    const [username, setUsername] = useState<string>('');
    const history = useHistory();

    function handleAuthenticate() {
        window.sessionStorage.setItem('name', username);

        history.push('/home');
    }

    return (
        <Container>
            <Card>
                <Title>Temisto</Title>

                <InputArea autoComplete="off" >
                    <InputCustom label="Usuário" value={username} onChange={e => setUsername(e.target.value)} />

                    <InputCustom label="Senha" type="password" />

                    <ButtonCustom label="Entrar" typeButton="submit" onClick={handleAuthenticate} />
                </InputArea>
            </Card>
        </Container>
    )
}

export default Login;
