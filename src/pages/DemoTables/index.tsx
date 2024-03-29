import React from 'react';
import { useState, useEffect } from 'react';

import Modal from 'react-modal'

import { Table, TableBody, TableColumn, TableHead, TableRow, TableHeadCollumn } from '../../Global/styles';
import ClientService from '../../callApi/Client';
import { Client } from '../../models/Client';

import { ContainerClient, Card, InputArea, ButtonArea } from '../../modalPages/Clients/styles';
import InputCustom from '../../components/Input/InputCustom';
import ButtonCustom from '../../components/Button/ButtonCustom';

//Passar todo o módulo de criação e update de cliente para um único .tsx

const DemoTables = () => {
    const [nameClient, setNameClient] = useState<string>('');
    const [phone_1Client, setPhone_1Client] = useState<string>('');
    const [phone_2Client, setPhone_2Client] = useState<string>('');
    const [preferencesClient, setPreferencesClient] = useState<string>('');

    const [client, setClient] = useState<Client>({} as Client);
    // const [clients, setClients] = useState<Client[]>([{}] as Client[]);

    const [openModal, setOpenModal] = useState<boolean>(false);

    function open() {
        openModal ? setOpenModal(false) : setOpenModal(true);
    }

    useEffect(() => {
        clientShow();
    }, []);

    function clientShow() {
        // console.log('oi')
        // ClientService.show().then((resp) => {
        //     // setClients(resp.data);
        // }).catch((err) => {
        //     console.log(err);
        // });
    }

    function handleClientIndex(id: number) {
        open();

        ClientService.index(id).then((resp) => {
            setClient(resp.data.client);

            setNameClient(resp.data.client.name);
            setPhone_1Client(resp.data.client.phone_1);
            setPhone_2Client(resp.data.client.phone_2);
            // setPreferencesClient(resp.data.preferences);

        }).catch((err) => {
            console.log(err);
        });
    }

    function clientAlter(id: number) {
        const jsonClient = { name: nameClient, phone_1: phone_1Client, phone_2: phone_2Client, preferences: preferencesClient }

        ClientService.alter(id, jsonClient).then((resp) => {
            console.log(resp);

            clientShow();
            alert('Alterado com Sucesso');
            open();
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <Table>
                <TableHead>
                    <TableHeadCollumn>Cod</TableHeadCollumn>
                    <TableHeadCollumn>Nome</TableHeadCollumn>
                    <TableHeadCollumn>Celular</TableHeadCollumn>
                    <TableHeadCollumn>Preferências</TableHeadCollumn>
                    <TableHeadCollumn>Criado</TableHeadCollumn>
                </TableHead>
                <TableBody>
                            {/* {clients.map((client, index) => {
                                return (
                                    <TableRow key={index}
                                    onClick={() => handleClientIndex(client.id)}
                                    >
                                        <TableColumn> {client.id} </TableColumn>
                                        <TableColumn> {client.name} </TableColumn>
                                        <TableColumn> {client.phone_1} </TableColumn>
                                        <TableColumn> {client.preferences} </TableColumn>
                                        <TableColumn> {client.created_at} </TableColumn>
                                    </TableRow>
                                )
                            }) } */}
                </TableBody>
            </Table>

            <Modal isOpen={openModal}>
                <ContainerClient>
                    <Card>
                        <p onClick={() => {open()}}>FECHAR</p>
                        <InputArea>
                            <InputCustom label="Nome" value={nameClient} onChange={(e) => { setNameClient(e.target.value) }}/>
                            <InputCustom label='Celular' value={phone_1Client} onChange={(e) => { setPhone_1Client(e.target.value) }}></InputCustom>
                        </InputArea>
                        <InputArea>
                            <InputCustom label='Telefone' value={phone_2Client} onChange={(e) => { setPhone_2Client(e.target.value) }}></InputCustom>
                            <InputCustom label='Preferências' value={preferencesClient} onChange={(e) => { setPreferencesClient(e.target.value) }}></InputCustom>
                        </InputArea>

                        <ButtonArea>
                            <ButtonCustom label='Deletar' typeButton='button'></ButtonCustom>
                            <ButtonCustom label='Editar' typeButton='button' onClick={() => clientAlter(client.id) }></ButtonCustom>
                        </ButtonArea>
                    </Card> 
                </ContainerClient>
            </Modal>   
        </>
    )
}

export default DemoTables;
