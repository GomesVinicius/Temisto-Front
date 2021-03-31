import React from 'react';
import { Table, TableArea, TableBody, TableColumn, TableHead, TableRow, TableHeadCollumn } from '../../Global/styles';

const DemoTables = () => {
    return (
        <>
            <Table>
                <TableHead>
                    <TableHeadCollumn>Cod</TableHeadCollumn>
                    <TableHeadCollumn>Nome</TableHeadCollumn>
                    <TableHeadCollumn>Celular</TableHeadCollumn>
                    <TableHeadCollumn>Celular 2</TableHeadCollumn>
                    <TableHeadCollumn>Criado</TableHeadCollumn>
                </TableHead>

                <TableBody>

                    <TableRow>
                        <TableColumn>
                            {/* {client.id} */}
                                        1
                                    </TableColumn>
                        <TableColumn>
                            {/* {client.name} */}
                                        nome
                                    </TableColumn>
                        <TableColumn>
                            {/* {client.phone_1} */}
                                        34
                                    </TableColumn>
                        <TableColumn>
                            {/* {client.phone_2} */}

                        </TableColumn>
                        <TableColumn>
                            {/* {client.created_at} */}
                                        23/12/2020
                                    </TableColumn>

                        {/*  
                                    
                                    */}

                    </TableRow>

                    <TableRow>
                        <TableColumn>
                            {/* {client.id} */}
                                        1
                                    </TableColumn>
                        <TableColumn>
                            {/* {client.name} */}
                                        nome
                                    </TableColumn>
                        <TableColumn>
                            {/* {client.phone_1} */}
                                        34
                                    </TableColumn>
                        <TableColumn>
                            {/* {client.phone_2} */}

                        </TableColumn>
                        <TableColumn>
                            {/* {client.created_at} */}
                                        23/12/2020
                                    </TableColumn>

                        {/*  
                                    
                                    */}

                    </TableRow>

                    <TableRow>
                        <TableColumn>
                            {/* {client.id} */}
                                        1
                                    </TableColumn>
                        <TableColumn>
                            {/* {client.name} */}
                                        nome
                                    </TableColumn>
                        <TableColumn>
                            {/* {client.phone_1} */}
                                        34
                                    </TableColumn>
                        <TableColumn>
                            {/* {client.phone_2} */}

                        </TableColumn>
                        <TableColumn>
                            {/* {client.created_at} */}
                                        23/12/2020
                                    </TableColumn>

                        {/*  
                                    
                                    */}

                    </TableRow>
                    <TableRow>
                        <TableColumn>
                            {/* {client.id} */}
                                        1
                                    </TableColumn>
                        <TableColumn>
                            {/* {client.name} */}
                                        nome
                                    </TableColumn>
                        <TableColumn>
                            {/* {client.phone_1} */}
                                        34
                                    </TableColumn>
                        <TableColumn>
                            {/* {client.phone_2} */}

                        </TableColumn>
                        <TableColumn>
                            {/* {client.created_at} */}
                                        23/12/2020
                                    </TableColumn>

                        {/*  
                                    
                                    */}

                    </TableRow>
                </TableBody>
            </Table>

        </>
    )
}

export default DemoTables;
