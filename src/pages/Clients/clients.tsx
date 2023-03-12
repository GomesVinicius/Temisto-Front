import React, { useEffect, useState } from 'react';
import ClientService from '../../callApi/Client';
import ButtonPlus from '../../components/ButtonPlus/ButtonPlus';
// import ModalCustom from '../../components/Modal/Modal';
import ModalClient from '../../modalPages/Clients/ModalClients';
import { Client } from '../../models/Client';

import { Container } from './style';
import { Table, TableArea, TableBody, TableColumn, TableHead, TableRow, TableHeadCollumn } from '../../Global/styles';
import DemoTables from '../DemoTables';

const Clients = () => {
    // const [client, setClient] = useState<Client>({} as Client);
    // const [clients, setClients] = useState<Client[]>([{}] as Client[]);

    const [openModal, setOpenModal] = useState<boolean>(false);

    // useEffect(() => { 
    //     ClientService.show().then((resp) => {
    //         setClients(resp.data);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }, []);

    function open() {
        openModal ? setOpenModal(false) : setOpenModal(true);
    }

    return (
        <>
            <Container transparent={openModal ? 'rgba(0, 0, 0, 0.3)' : ''}>
                <TableArea>
                    <DemoTables />
                </TableArea>


                {openModal ?
                    <ModalClient/>
                    : <> </>
                }

                <ButtonPlus func={() => open()} />
            </Container>
        </>
    )
}

export default Clients;
