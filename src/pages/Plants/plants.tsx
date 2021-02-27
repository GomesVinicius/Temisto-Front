import React from 'react';
import ButtonCustom from '../../components/Button/ButtonCustom';
import InputCustom from '../../components/Input/InputCustom';
import { Title } from '../../Global/styles';
import { Container, InputArea, ButtonArea } from './style';

const Plants = () => {
    return (
        <Container>
            <Title>Cadastro</Title>
            <InputArea>
                <InputCustom label="Nome" />
                <InputCustom label="Altura" />
                <InputCustom label="Preço de compra" />
                <InputCustom label="Preço de venda" />
                <InputCustom label="Esqueci" />
            </InputArea>
            <ButtonArea>
                <ButtonCustom label="Salvar" typeButton="submit" />
            </ButtonArea>
        </Container>
    )
}

export default Plants;
