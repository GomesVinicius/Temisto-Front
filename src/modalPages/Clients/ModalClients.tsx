import React from 'react';
import { Container, Card, InputArea, ButtonArea } from './styles';
import InputCustom from '../../components/Input/InputCustom';
import ButtonCustom from '../../components/Button/ButtonCustom';

const ModalClient: React.FC = () => {
    return (
        <>
            <Container>
                <Card>
                    <InputArea>
                        <InputCustom label='Nome'></InputCustom>
                        <InputCustom label='Celular'></InputCustom>
                    </InputArea>
                    <InputArea>
                        <InputCustom label='Telefone'></InputCustom>
                        <InputCustom label='Preferências'></InputCustom>
                    </InputArea>

                    <ButtonArea>
                        <ButtonCustom label='Salvar' typeButton='button'></ButtonCustom>
                    </ButtonArea>
                </Card>
            </Container>
        </>
    )
}

export default ModalClient;
