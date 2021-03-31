import React from 'react';
import ButtonCustom from '../../components/Button/ButtonCustom';
import ButtonPlus from '../../components/ButtonPlus/ButtonPlus';
import InputCustom from '../../components/Input/InputCustom';
import { TableArea, Title } from '../../Global/styles';
import DemoTables from '../DemoTables';
import { Container, InputArea, ButtonArea } from './style';

const Plants = () => {
    return (
        <Container>
            <TableArea>
                <DemoTables />
            </TableArea>
            <ButtonPlus func={() => { }} />
        </Container>
    )
}

export default Plants;
