import React, { useEffect, useState } from 'react';
import ClientService from '../../callApi/Client';
import ButtonPlus from '../../components/ButtonPlus/ButtonPlus';
import Modal from 'react-modal'

import ModalClient from '../../modalPages/Clients/ModalClients';
import { Client } from '../../models/Client';

import { Container } from './style';
import { Table, TableArea, TableBody, TableColumn, TableHead, TableRow, TableHeadCollumn } from '../../Global/styles';
import { ContainerClient, Card, InputArea, ButtonArea } from '../../modalPages/Clients/styles';
import InputCustom from '../../components/Input/InputCustom';
import ButtonCustom from '../../components/Button/ButtonCustom';
// import DemoTables from '../DemoTables';

const Clients = () => {
    const [nameClient, setNameClient] = useState<string>('');
    const [phone_1Client, setPhone_1Client] = useState<string>('');
    const [phone_2Client, setPhone_2Client] = useState<string>('');
    const [preferencesClient, setPreferencesClient] = useState<string>('');

    const [client, setClient] = useState<Client>({} as Client);
    const [clients, setClients] = useState<Client[]>([{}] as Client[]);

    const [openModalEditDelete, setOpenModalEditDelete] = useState<boolean>(false);
    const [openModalCreate, setOpenModalCreate] = useState<boolean>(false);

    function openCreate() {
        openModalCreate ? setOpenModalCreate(false) : setOpenModalCreate(true);
    }

    function openEditDelete() {
        openModalEditDelete ? setOpenModalEditDelete(false) : setOpenModalEditDelete(true);
    }

    useEffect(() => {
        handleClientShow();
    }, []);

    function handleClientShow() {
        console.log('oi')
        ClientService.show().then((resp) => {
            setClients(resp.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    function handleClientIndex(id: number) {
        openEditDelete();

        ClientService.index(id).then((resp) => {
            setClient(resp.data);

            setNameClient(resp.data.name);
            setPhone_1Client(resp.data.phone_1);
            setPhone_2Client(resp.data.phone_2);
            setPreferencesClient(resp.data.preferences);

        }).catch((err) => {
            console.log(err);
        });
    }

    function handleClientUpdate(id: number) {
        const jsonClient = { name: nameClient, phone_1: phone_1Client, phone_2: phone_2Client, preferences: preferencesClient }

        ClientService.alter(id, jsonClient).then((resp) => {
            handleClientShow();
            alert('Alterado com Sucesso');
            openEditDelete();
        }).catch((err) => {
            console.log(err);
        });
    }

    function handleCreateClient() {
        const jsonClient = { name: nameClient, phone_1: phone_1Client, phone_2: phone_2Client, preferences: preferencesClient }
        ClientService.store(jsonClient).then((resp) => {
            handleClientShow();
            console.log(resp);
            alert('Criado com sucesso');
            openCreate()
        }).catch((err) => {
            console.error(err);
        });
    }

    return (
        <>
            <Container transparent={openModalEditDelete ? 'rgba(0, 0, 0, 0.3)' : ''}>
                <TableArea>ss
                    <Table>
                    <TableHead>
                        <TableHeadCollumn>Cod</TableHeadCollumn>
                        <TableHeadCollumn>Nome</TableHeadCollumn>
                        <TableHeadCollumn>Celular</TableHeadCollumn>
                        <TableHeadCollumn>Preferências</TableHeadCollumn>
                        <TableHeadCollumn>Criado</TableHeadCollumn>
                    </TableHead>
                    <TableBody>
                                {clients.map((client, index) => {
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
                                }) }
                    </TableBody>
                </Table>

                <Modal isOpen={openModalEditDelete}>
                    <ContainerClient>
                        <Card>
                            <p onClick={() => {openEditDelete()}}>FECHAR</p>
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
                                <ButtonCustom label='Editar' typeButton='button' onClick={() => handleClientUpdate(client.id) }></ButtonCustom>
                            </ButtonArea>
                        </Card> 
                    </ContainerClient>
                </Modal>   
                </TableArea>


                {openModalCreate ?
                    <ContainerClient>
                        <Card>
                            <InputArea>
                                <InputCustom label='Nome' value={nameClient} onChange={(e) => { setNameClient(e.target.value) }}></InputCustom>
                                <InputCustom label='Celular' value={phone_1Client} onChange={(e) => { setPhone_1Client(e.target.value) }}></InputCustom>
                            </InputArea>
                            <InputArea>
                                <InputCustom label='Telefone' value={phone_2Client} onChange={(e) => { setPhone_2Client(e.target.value) }} ></InputCustom>
                                <InputCustom label='Preferências' value={preferencesClient} onChange={(e) => { setPreferencesClient(e.target.value) }} ></InputCustom>
                            </InputArea>

                            <ButtonArea>
                                <ButtonCustom label='Salvar' typeButton='button' onClick={() => handleCreateClient()} ></ButtonCustom>
                            </ButtonArea>
                        </Card>
                    </ContainerClient>
                    : <> </>
                }

                <ButtonPlus func={() => openCreate()} />
            </Container>
        </>
    )
}

export default Clients;
