import React from 'react';
import ButtonPlus from '../../components/ButtonPlus/ButtonPlus';
import { Container } from './style';

import { Table, TableArea, TableBody, TableColumn, TableHead, TableRow, TableHeadCollumn } from '../../Global/styles';

const Sales = () => {
    return (
        <>
            <Container>
                <TableArea>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeadCollumn>Cliente</TableHeadCollumn>
                                <TableHeadCollumn>Plantas</TableHeadCollumn>
                                <TableHeadCollumn>Preço</TableHeadCollumn>
                                <TableHeadCollumn>Método Pagamento</TableHeadCollumn>
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

            <ButtonPlus func={() => { }} />
        </>
    )
}

export default Sales
