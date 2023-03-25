import React, { useState, useEffect } from 'react';
import PlantService from '../../callApi/Plant';
import ButtonCustom from '../../components/Button/ButtonCustom';
import ButtonPlus from '../../components/ButtonPlus/ButtonPlus';
import InputCustom from '../../components/Input/InputCustom';
import { Table, TableArea, TableBody, TableColumn, TableHead, TableHeadCollumn, TableRow } from '../../Global/styles';
import { Plant } from '../../models/Plant';
import { Container, InputArea, ButtonArea } from './style';

import Modal from 'react-modal'
import { Card, ContainerClient } from '../../modalPages/Clients/styles';

const Plants = () => {
    const [namePlant, setNamePlant] = useState<string>('');
    const [amountPlant, setAmountPlant] = useState<number>(0);
    const [heightPlant, setHeightPlant] = useState<number>(0);
    const [priceBuyPlant, setPriceBuyPlant] = useState<number>(0);
    const [priceSellPlant, setPriceSellPlant] = useState<number>(0);

    const [plant, setPlant] = useState<Plant>({} as Plant);
    const [plants, setPlants] = useState<Plant[]>([{}] as Plant[]);

    const [openModalEditDelete, setOpenModalEditDelete] = useState<boolean>(false);
    const [openModalCreate, setOpenModalCreate] = useState<boolean>(false);

    useEffect(() => {
        handlePlantIndex();
    }, [])

    function handlePlantShow(id:number) {
        openEditDelete();
        PlantService.show(id).then((resp) => {
            setPlant(resp.data[0]);

            setNamePlant(resp.data[0].name);
            setAmountPlant(resp.data[0].amount);
            setHeightPlant(resp.data[0].height);
            setPriceBuyPlant(resp.data[0].price_buy);
            setPriceSellPlant(resp.data[0].price_sell);

        }).catch((err) => {
            console.error(err);
        });
    }

    function handlePlantIndex() {
        PlantService.index().then((resp) => {
            setPlants(resp.data);        
        }).catch((err) => {
            console.error(err);
        })
    }

    function handlePlantCreate() {
        const jsonPlant = { name: namePlant, amount: amountPlant, price_buy: priceBuyPlant, price_sell: priceSellPlant, height: heightPlant };

        PlantService.store(jsonPlant).then((resp) => {
            handlePlantIndex();
            alert('Criado com sucesso');
            openCreate();
        }).catch((err) => {
            console.error(err);
        });
    }

    function handlePlantUpdate(id: number) {
        const jsonPlant = { name: namePlant, amount: amountPlant, price_buy: priceBuyPlant, price_sell: priceSellPlant, height: heightPlant }

        PlantService.alter(id, jsonPlant).then((resp) => {
            handlePlantIndex();
            alert('Alterado com Sucesso');
            openEditDelete();
        }).catch((err) => {
            console.log(err);
        });
    }

    function handlePlantDelete(id: number) {
        PlantService.delete(id).then((resp) => {
            console.log(resp);
            alert('Deletado com sucesso');
            handlePlantIndex();
            openEditDelete();
        }).catch((err) => {
            console.error(err);
        });
    }

    function openCreate() {
        openModalCreate ? setOpenModalCreate(false) : setOpenModalCreate(true);
    }

    function openEditDelete() {
        // console.log('1', namePlant);
        // console.log('2', plant.name);
        // console.log('3', plants)
        openModalEditDelete ? setOpenModalEditDelete(false) : setOpenModalEditDelete(true);
    }

    return (
        <Container
            // transparent={openModalEditDelete || openModalCreate ? 'rgba(0, 0, 0, 0.3)' : ''}
            >
            <InputCustom label='Pesquisar'
                // value={search}
                // onChange={(e) => { setSearch(e.target.value) }}
                // onKeyUp={() => {handleSearchClient(search)}}
            ></InputCustom>
            <TableArea>
                <Table>
                    <TableHead>
                        <TableHeadCollumn>Cod</TableHeadCollumn>
                        <TableHeadCollumn>Nome</TableHeadCollumn>
                        <TableHeadCollumn>Altura</TableHeadCollumn>
                        <TableHeadCollumn>Compra</TableHeadCollumn>
                        <TableHeadCollumn>Venda</TableHeadCollumn>
                    </TableHead>
                    <TableBody>
                        {plants.map((plant, index) => {
                            return (
                                <TableRow key={index}
                                    onClick={() => handlePlantShow(plant.id)}
                                    // onClick={() => { }}
                                >
                                    <TableColumn> {plant.id} </TableColumn>
                                    <TableColumn> {plant.name} </TableColumn>
                                    <TableColumn> {plant.height} </TableColumn>
                                    <TableColumn> {plant.price_buy} </TableColumn>
                                    <TableColumn> {plant.price_sell} </TableColumn>
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
                                <InputCustom label='Nome' value={namePlant} onChange={(e) => { setNamePlant(e.target.value) }}></InputCustom>
                                <InputCustom label='Quantidade' value={amountPlant} onChange={(e) => { setAmountPlant( Number(e.target.value)) }}></InputCustom>
                            </InputArea>
                            <InputArea>
                                <InputCustom label='Preço Venda' value={priceSellPlant} onChange={(e) => { setPriceSellPlant( Number(e.target.value)) }} ></InputCustom>
                                <InputCustom label='Preço Compra' value={priceBuyPlant} onChange={(e) => { setPriceBuyPlant( Number(e.target.value)) }} ></InputCustom>
                                <InputCustom label='Altura' value={heightPlant} onChange={(e) => { setHeightPlant( Number(e.target.value)) }} ></InputCustom>
                            </InputArea>

                            <ButtonArea>
                                <ButtonCustom label='Deletar' typeButton='button' onClick={() => handlePlantDelete(plant.id) }></ButtonCustom>
                                <ButtonCustom label='Editar' typeButton='button' onClick={() => handlePlantUpdate(plant.id) }></ButtonCustom>
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
                                <InputCustom label='Nome' value={namePlant} onChange={(e) => { setNamePlant(e.target.value) }}></InputCustom>
                                <InputCustom label='Quantidade' value={amountPlant} onChange={(e) => { setAmountPlant( Number(e.target.value)) }}></InputCustom>
                            </InputArea>
                            <InputArea>
                                <InputCustom label='Preço Venda' value={priceSellPlant} onChange={(e) => { setPriceSellPlant( Number(e.target.value)) }} ></InputCustom>
                                <InputCustom label='Preço Compra' value={priceBuyPlant} onChange={(e) => { setPriceBuyPlant( Number(e.target.value)) }} ></InputCustom>
                                <InputCustom label='Altura' value={heightPlant} onChange={(e) => { setHeightPlant( Number(e.target.value)) }} ></InputCustom>
                            </InputArea>

                            <ButtonArea>
                                <ButtonCustom label='Salvar' typeButton='button' onClick={() => handlePlantCreate()} ></ButtonCustom>
                            </ButtonArea>
                        </Card>
                    </ContainerClient>
                </Modal>
            <ButtonPlus func={() => { openCreate() }} />
        </Container>
    )
}

export default Plants;
