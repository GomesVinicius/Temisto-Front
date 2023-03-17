import React from 'react';
import { useState } from 'react';
import { ContainerClient, Card, InputArea, ButtonArea } from './styles';
import InputCustom from '../../components/Input/InputCustom';
import ButtonCustom from '../../components/Button/ButtonCustom';

import ClientService from '../../callApi/Client';

const ModalClient: React.FC = () => {
    const [nameClient, setNameClient] = useState<string>('');
    const [phone_1Client, setPhone_1Client] = useState<string>('');
    const [phone_2Client, setPhone_2Client] = useState<string>('');
    const [preferencesClient, setPreferencesClient] = useState<string>('');

    function handleCreateClient() {
        const jsonClient = { name: nameClient, phone_1: phone_1Client, phone_2: phone_2Client, preferences: preferencesClient }
        ClientService.store(jsonClient).then((resp) => {
            console.log(resp);
            alert('Criado com sucesso');
        }).catch((err) => {
            console.error(err);
        });
    }

    return (
        <>
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
        </>
    )
}

export default ModalClient;
