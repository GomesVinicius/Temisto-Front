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
import Select from 'react-select'
import ClientPreferences from '../../callApi/ClientPreferences';
import { ClientPreference } from '../../models/ClientsPreferences';
import { ClientWithPreferences } from '../../models/ClientsWithPreferences';
import { Preferences } from '../../models/Preferences';

export interface PlantOptions {
    value: any,
    label: string
}

const Clients = () => {
    const [nameClient, setNameClient] = useState<string>('');
    const [phone_1Client, setPhone_1Client] = useState<string>('');
    const [phone_2Client, setPhone_2Client] = useState<string>('');

    const [client, setClient] = useState<ClientWithPreferences>({} as ClientWithPreferences);
    const [clients, setClients] = useState<ClientWithPreferences[]>([]);

    const [openModalEditDelete, setOpenModalEditDelete] = useState<boolean>(false);
    const [openModalCreate, setOpenModalCreate] = useState<boolean>(false);

    const [search, setSearch] = useState<string>('');

    const [plants, setPlants] = useState<Plant[]>([{}] as Plant[]);
    const [plantsOption, setPlantsOption] = useState<PlantOptions[]>([{}] as PlantOptions[]);

    const [plantSelected, setPlantSelected] = React.useState<readonly PlantOptions[]>([]);
    const [plantPreferencesClient, setPlantPreferencesClient] = useState<readonly PlantOptions[]>([]);


    function handleSearchClient(source: string) {
        handleClientShow(source)
        console.log(nameClient)
    }

    function openCreate() {
        cleanStates();
        handlePlantIndex();
        openModalCreate ? setOpenModalCreate(false) : setOpenModalCreate(true);
    }

    function openEditDelete() {
        openModalEditDelete ? setOpenModalEditDelete(false) : setOpenModalEditDelete(true);
    }

    function handleClientShow(query?: string) {
        console.log('oi')
        ClientService.show(query).then((resp) => {
            setClients(resp.data);
            
            resp.data.map(client => {
                client.pref.map(pref => {
                    console.log(pref.name)
                })
            })

        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        handleClientShow()
        // handlePlantIndex();
    }, []);

    function cleanStates() {
        setNameClient('');
        setPhone_1Client('');
        setPhone_2Client('');

        setSearch('');
    }

    function handlePlantIndex() {
        PlantService.index().then((resp) => {
            setPlants(resp.data);
            
            let auxPlantsOption: PlantOptions[] = [{label: '', value: 1}]
            
            resp.data.map(plant => {
                auxPlantsOption.push({label: plant.name , value: plant.id})
            })

            // plants.map(plant => {
            //     auxPlantsOption.push({label: plant.name, value: plant.id})
            // }) PorQUE Não funciona usando o setPlant??????????????????????

            auxPlantsOption.shift();
            
            setPlantsOption(auxPlantsOption);          
        }).catch((err) => {
            console.error(err);
        })
    }

    function handleClientIndex(id: number) {
        openEditDelete();
        handlePlantIndex()

        ClientService.index(id).then((resp) => {
            setClient(resp.data);

            setNameClient(resp.data.client.name);
            setPhone_1Client(resp.data.client.phone_1);
            setPhone_2Client(resp.data.client.phone_2);
            // setPreferencesClient(resp.data.preferences);

            let auxPlantsOption: PlantOptions[] = [{label: '', value: 1}]
            
            resp.data.pref.map(plant => {
                auxPlantsOption.push({label: plant.name , value: plant.id_plant})
            })

            auxPlantsOption.shift();
            
            setPlantPreferencesClient(auxPlantsOption);

        }).catch((err) => {
            console.log(err);
        });

        console.log(client)
    }

    function handleClientUpdate(id: number) {
        let preferences: [{ id_client: number, id_plant: number }] = [{ id_client: 0, id_plant: 0 }]

        plantPreferencesClient.map(pref => {
            preferences.push({ id_client: id, id_plant: pref.value })
        })

        preferences.shift()
        console.log(preferences)

        let jsonClient: { client:
            { name: string, phone_1: string, phone_2: string },
        pref:
            [{ id_client: number, id_plant: number }]
        }

        jsonClient = { client: { name: nameClient, phone_1: phone_1Client, phone_2: phone_2Client},
                        pref: preferences }

        // const jsonClient: ClientWithPreferences = { client:
        //     { id: id, name: nameClient, phone_1: phone_1Client, phone_2: phone_2Client },
        // pref:
        //     [{ id_client: 1, id_plant: 1, name: '' }] }

        ClientService.alter(id, jsonClient).then((resp) => {
            handleClientShow();
            alert('Alterado com Sucesso');
            openEditDelete();
            cleanStates();

            // const idPlants: ClientPreference[] = plantSelected.map(plant => {
            //     return { id_client: resp.data.client_id_created, id_plant: plant.value }
            // })

            console.log('aq', jsonClient)

        }).catch((err) => {
            console.log(err);
        });
    }

    function handleClientCreate() {
        cleanStates();

        const jsonClient = { name: nameClient, phone_1: phone_1Client, phone_2: phone_2Client };

        ClientService.store(jsonClient).then((resp) => { 
            console.log(resp.data.client_id_created);
            
            const idPlants: ClientPreference[] = plantSelected.map(plant => {
                return { id_client: resp.data.client_id_created, id_plant: plant.value }
            })
            
            ClientPreferences.store(idPlants).then((resp) => {
                console.log(resp.data)
            }).catch((err) => {
                console.error(err);
            });
            
            alert('Criado com sucesso');
            
            handleClientShow();
            console.log(resp.data.client_id_created);

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
                                        onDoubleClick={() => handleClientIndex(client.client.id)}
                                        // onClick={() => handleClientIndex(client.client.id)}
                                    >
                                        <TableColumn> {client.client.id} </TableColumn>
                                        <TableColumn> {client.client.name} </TableColumn>
                                        <TableColumn> {client.client.phone_1} </TableColumn>
                                        <TableColumn>
                                            { 
                                            client.pref[0] != null ? 
                                            client.pref.map((pref, index) => {
                                                    console.log('oi', client.pref.keys())
                                                    return `${pref.name} `
                                                }) : ''
                                            }
                                        </TableColumn>
                                        <TableColumn> {client.client.created_at} </TableColumn>
                                    </TableRow>
                                )
                            }) }
                        </TableBody>
                    </Table>
                </TableArea>

                <Modal isOpen={openModalEditDelete}
                    style={{ content: {background: 'none', border: '0px'} }}
                    // shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc
                    onRequestClose={() => {
                        cleanStates();
                        setOpenModalEditDelete(false);
                    }}
                  >
                    <ContainerClient>
                        <Card>
                            <p onClick={() => {openEditDelete()}}>
                                <img src={require('../../icons/close-icon.png')}></img>
                            </p>
                            <InputArea>
                                <InputCustom label="Nome" value={nameClient} onChange={(e) => { setNameClient(e.target.value) }}/>
                                <InputCustom label='Celular' value={phone_1Client} onChange={(e) => { setPhone_1Client(e.target.value) }}></InputCustom>
                            </InputArea>
                            <InputArea>
                                <InputCustom label='Telefone' value={phone_2Client} onChange={(e) => { setPhone_2Client(e.target.value) }}></InputCustom>
                                <Select options={plantsOption} value={plantPreferencesClient} isMulti onChange={(newValue) => { setPlantPreferencesClient(newValue) }}  />
                            </InputArea>

                            <ButtonArea>
                                <ButtonCustom buttonEffect='delete' label='Deletar' typeButton='button' onClick={() => handleClientDelete(client.client.id) } ></ButtonCustom>
                                <ButtonCustom buttonEffect='edit' label='Editar' typeButton='button' onClick={() => handleClientUpdate(client.client.id) }></ButtonCustom>
                            </ButtonArea>
                        </Card> 
                    </ContainerClient>
                </Modal>   

                <Modal isOpen={openModalCreate}
                    style={{ content: {background: 'none', border: '0px'} }}
                    shouldCloseOnEsc
                    onRequestClose={() => {
                        cleanStates();
                        setOpenModalCreate(false);
                    }}
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
                                <Select options={plantsOption} isMulti onChange={(newValue) => { setPlantSelected(newValue) }} />
                            </InputArea>

                            <ButtonArea>
                                <ButtonCustom buttonEffect='normal' label='Salvar' typeButton='button' onClick={() => handleClientCreate()} ></ButtonCustom>
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
