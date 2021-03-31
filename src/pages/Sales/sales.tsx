import React from 'react';
import ButtonPlus from '../../components/ButtonPlus/ButtonPlus';
import { Container } from './style';

import { Table, TableArea, TableBody, TableColumn, TableHead, TableRow, TableHeadCollumn } from '../../Global/styles';
import DemoTables from '../DemoTables';

const Sales = () => {
    return (
        <>
            <Container>
                <TableArea>
                    <DemoTables />
                </TableArea>
            </Container>

            <ButtonPlus func={() => { }} />
        </>
    )
}

export default Sales
