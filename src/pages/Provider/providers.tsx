import React from 'react';
import ButtonPlus from '../../components/ButtonPlus/ButtonPlus';
import { Container } from './style';

import { Table, TableArea, TableBody, TableColumn, TableHead, TableRow, TableHeadCollumn } from '../../Global/styles';

const Providers = () => {
    return (
        <>
            <Container>
            <TableArea>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeadCollumn>Provedor</TableHeadCollumn>
                                <TableHeadCollumn>Celular 1</TableHeadCollumn>
                                <TableHeadCollumn>Celular 2</TableHeadCollumn>
                                <TableHeadCollumn>Tipo</TableHeadCollumn>
                            </TableRow>
                        </TableHead>

                        {/* <TableBody>
                            {clients?.map(client => (
                                <TableRow key={client.name}>
                                    <TableColumn>
                                        {client.id}
                                    </TableColumn>
                                    <TableColumn>
                                        {client.name}
                                    </TableColumn>
                                    <TableColumn>
                                        {client.phone_1}
                                    </TableColumn>
                                    <TableColumn>
                                        {client.phone_2}
                                    </TableColumn>
                                    <TableColumn>
                                        {client.created_at}
                                    </TableColumn>
                                </TableRow>
                            ))}
                        </TableBody> */}
                    </Table>
                </TableArea>
            </Container>
            <ButtonPlus func={() => {}} />
        </>
    )
}

export default Providers
