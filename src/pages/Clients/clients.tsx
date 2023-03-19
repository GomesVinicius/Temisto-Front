import React, { useEffect, useState } from 'react';
import Modal from 'react-modal'

import ClientService from '../../callApi/Client';
import PlantService from '../../callApi/Plant';

import { Table, TableArea, TableBody, TableColumn, TableHead, TableRow, TableHeadCollumn } from '../../Global/styles';
import { ContainerClient, Card, InputArea, ButtonArea } from '../../modalPages/Clients/styles';
import { Container } from './style';

import { Client } from '../../models/Client';
import { Plant } from '../../models/Plant';

import ButtonPlus from '../../components/ButtonPlus/ButtonPlus';
import ButtonCustom from '../../components/Button/ButtonCustom';
import InputCustom from '../../components/Input/InputCustom';
import { platform } from 'os';

const Clients = () => {
    const [nameClient, setNameClient] = useState<string>('');
    const [phone_1Client, setPhone_1Client] = useState<string>('');
    const [phone_2Client, setPhone_2Client] = useState<string>('');
    const [preferencesClient, setPreferencesClient] = useState<string>('');

    const [client, setClient] = useState<Client>({} as Client);
    const [clients, setClients] = useState<Client[]>([{}] as Client[]);

    const [openModalEditDelete, setOpenModalEditDelete] = useState<boolean>(false);
    const [openModalCreate, setOpenModalCreate] = useState<boolean>(false);

    const [search, setSearch] = useState<string>('');

    const [plants, setPlants] = useState<Plant[]>([{}] as Plant[]);

    function handleSearchClient(source: string) {
        handleClientShow(source)
        console.log(nameClient)
    }

    function openCreate() {
        cleanStates();
        openModalCreate ? setOpenModalCreate(false) : setOpenModalCreate(true);
    }

    function openEditDelete() {
        openModalEditDelete ? setOpenModalEditDelete(false) : setOpenModalEditDelete(true);
    }

    useEffect(() => {
        handleClientShow();
        handlePlantShow();
    }, []);

    function cleanStates() {
        setNameClient('');
        setPhone_1Client('');
        setPhone_2Client('');
        setPreferencesClient('');

        setSearch('');
    }

    function handlePlantShow() {
        PlantService.show().then((resp) => {
            setPlants(resp.data);

            console.log(resp.data);
        }).catch((err) => {
            console.error(err);
        })
    }

    function handleClientShow(query?: string) {
        ClientService.show(query).then((resp) => {
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
            cleanStates();
        }).catch((err) => {
            console.log(err);
        });
    }

    function handleClientCreate() {
        cleanStates();

        const jsonClient = { name: nameClient, phone_1: phone_1Client, phone_2: phone_2Client, preferences: preferencesClient };

        ClientService.store(jsonClient).then((resp) => {
            handleClientShow();
            console.log(resp);
            alert('Criado com sucesso');
            openCreate();
            cleanStates();
        }).catch((err) => {
            console.error(err);
        });
    }

    function handleClientDelete(id: number) {
        ClientService.delete(id).then((resp) => {
            console.log(resp);
            alert('Deletado com sucesso');
            handleClientShow();
            openEditDelete();
            cleanStates();
        }).catch((err) => {
            console.error(err);
        });
    }

    return (
        <>
            <Container transparent={openModalEditDelete || openModalCreate ? 'rgba(0, 0, 0, 0.3)' : ''}>
            <InputCustom label='Pesquisar'
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
                onKeyUp={() => {handleSearchClient(search)}}
            ></InputCustom>
                <TableArea>
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
                </TableArea>

                <Modal isOpen={openModalEditDelete}
                style={{ content: {background: 'none', border: '0px'} }}
                  >
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
                                <ButtonCustom label='Deletar' typeButton='button' onClick={() => handleClientDelete(client.id) }></ButtonCustom>
                                <ButtonCustom label='Editar' typeButton='button' onClick={() => handleClientUpdate(client.id) }></ButtonCustom>
                            </ButtonArea>
                        </Card> 
                    </ContainerClient>
                </Modal>   

                <Modal isOpen={openModalCreate}
                style={{ content: {background: 'none', border: '0px'} }}
                    >
                    <ContainerClient>
                        <Card>
                        <p onClick={() => {openCreate()}}>FECHAR</p>
                            <InputArea>
                                <InputCustom label='Nome' value={nameClient} onChange={(e) => { setNameClient(e.target.value) }}></InputCustom>
                                <InputCustom label='Celular' value={phone_1Client} onChange={(e) => { setPhone_1Client(e.target.value) }}></InputCustom>
                            </InputArea>
                            <InputArea>
                                <InputCustom label='Telefone' value={phone_2Client} onChange={(e) => { setPhone_2Client(e.target.value) }} ></InputCustom>
                                <InputCustom label='Preferências' value={preferencesClient} onChange={(e) => { setPreferencesClient(e.target.value) }} ></InputCustom>
                                <select name='plants'>
                                    {plants.map(plant => (
                                        <option value={plant.name} key={plant.id}>{plant.name}</option>
                                    ))}
                                </select>
                            </InputArea>

                            <ButtonArea>
                                <ButtonCustom label='Salvar' typeButton='button' onClick={() => handleClientCreate()} ></ButtonCustom>
                            </ButtonArea>
                        </Card>
                    </ContainerClient>
                </Modal>

                <ButtonPlus func={() => openCreate()} />
            </Container>
        </>
    )
}

export default Clients;
