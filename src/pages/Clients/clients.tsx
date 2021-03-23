import React, { useEffect, useState } from 'react'
import ClientService from '../../callApi/Client'
import ButtonPlus from '../../components/ButtonPlus/ButtonPlus'
import ModalCustom from '../../components/Modal/Modal'
import ModalClient from '../../modalPages/Clients/ModalClients'
import { Client } from '../../models/Client'

import { Container, Table, TableArea, TableBody, TableColumn, TableHead, TableRow, TableHeadCollumn } from './style'

const Clients = () => {
    const [client, setClient] = useState<Client>({} as Client);
    const [clients, setClients] = useState<Client[]>();

    const [openModal, setOpenModal] = useState<boolean>(false);

    useEffect(() => {
        ClientService.show().then((resp) => {
            setClients(resp.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    function open() {
        openModal ? setOpenModal(false) : setOpenModal(true);
    }

    return (
        <>
            <Container transparent={openModal ? 'rgba(0, 0, 0, 0.6)' : ''}>
                <TableArea>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeadCollumn>Cod</TableHeadCollumn>
                                <TableHeadCollumn>Nome</TableHeadCollumn>
                                <TableHeadCollumn>Celular</TableHeadCollumn>
                                <TableHeadCollumn>Celular 2</TableHeadCollumn>
                                <TableHeadCollumn>Criado</TableHeadCollumn>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {clients?.map(client => (
                                <TableRow key={client.id?.toString()}>
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
                        </TableBody>
                    </Table>
                </TableArea>

                {openModal ?
                    <ModalCustom layout={ModalClient} />
                    : <> </>
                }

                <ButtonPlus func={() => open()} />
            </Container>
        </>
    )
}

export default Clients;
