import React from 'react';

import { useState, useEffect } from 'react';
import { Table, TableBody, TableColumn, TableHead, TableRow, TableHeadCollumn } from '../../Global/styles';
import ClientService from '../../callApi/Client';
import { Client } from '../../models/Client';
import ModalClientUpdateDelete from '../../modalPages/Clients/ModalClientsUpdate_Delete';

const DemoTables = () => {
    const [client, setClient] = useState<Client>({} as Client);
    const [clients, setClients] = useState<Client[]>([{}] as Client[]);

    const [openModal, setOpenModal] = useState<boolean>(false);

    function open() {
        openModal ? setOpenModal(false) : setOpenModal(true);
    }
    //Possui problema ao clicar em uma linha da tabela na segunda vez para aparecer o modal de edição. É necessário clicar duas vezes
    //O motivo é de o openModal dessa página não conversa com o openModal da outra
    useEffect(() => {
        console.log('useEffect', openModal)
    }, [openModal])

    useEffect(() => { 
        ClientService.show().then((resp) => {
            setClients(resp.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    function clientIndex(id: number) {
        open();

        ClientService.index(id).then((resp) => {
            setClient(resp.data);

        }).catch((err) => {
            console.log(err);
        })
    }

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
                            {clients.map((client, index) => {
                                return (
                                    <TableRow key={index}
                                    onClick={() => clientIndex(client.id)}
                                    >
                                        <TableColumn> {client.id} </TableColumn>
                                        <TableColumn> {client.name} </TableColumn>
                                        <TableColumn> {client.phone_1} </TableColumn>
                                        <TableColumn> {client.phone_2} </TableColumn>
                                        <TableColumn> {client.created_at} </TableColumn>
                                    </TableRow>
                                )
                            }) }
                        
                </TableBody>
            </Table>

            {openModal ?    
                    <ModalClientUpdateDelete
                        client={client}
                        open={openModal}
                    />
                    : <> </>
                }
            
        </>
    )
}

export default DemoTables;
