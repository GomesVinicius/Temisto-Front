import React from 'react';
import InputCustom from '../../components/Input/InputCustom';
import ButtonCustom from '../../components/Button/ButtonCustom';
import { Title } from '../../Global/styles';
// import { Container, InputArea, ButtonArea } from '../../Global/GlobalStyles';


const ModalPlants: React.FC = () => {
    return (
        <>
            <Title>Cadastro</Title>
            {/* <InputArea> */}
                <InputCustom label="Nome" />
                <InputCustom label="Altura" />
                <InputCustom label="Preço de compra" />
                <InputCustom label="Preço de venda" />
                <InputCustom label="Esqueci" />
            {/* </InputArea> */}
            {/* <ButtonArea>
                <ButtonCustom label="Salvar" typeButton="submit" />
            </ButtonArea> */}
        </>
    )
}

export default ModalPlants;
