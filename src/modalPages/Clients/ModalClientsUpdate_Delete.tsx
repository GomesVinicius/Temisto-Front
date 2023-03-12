import React, { useEffect, useState } from 'react';
import { Container, Card, InputArea, ButtonArea } from './styles';
import InputCustom from '../../components/Input/InputCustom';
import ButtonCustom from '../../components/Button/ButtonCustom';

import { Client } from '../../models/Client';

const ModalClientUpdateDelete: React.FC<{client: Client, open: boolean}> = ({ client, open }) => {
    useEffect(() => {
        // console.log('oooo')
    }, []);

    const [openModal, setOpenModal] = useState<boolean>(true);
    
    const [clientName, setClientName] = useState<string>('');

    function openFunction() {
        openModal ? setOpenModal(false) : setOpenModal(true);
        // console.log(openModal)
    }

    return (
        <> {openModal ?
            <Container>
                    <Card>
                        <p onClick={() => {openFunction()}}>FECHAR</p>
                        <InputArea>
                            <InputCustom
                            label='Nome'
                            // value={client.name}
                            onChange={(e) => { setClientName(e.target.value) }}/>
                            <InputCustom label='Celular'></InputCustom>
                        </InputArea>
                        <InputArea>
                            <InputCustom label='Telefone'></InputCustom>
                            <InputCustom label='Preferências'></InputCustom>
                        </InputArea>

                        <ButtonArea>
                            <ButtonCustom label='Deletar' typeButton='button'></ButtonCustom>
                            <ButtonCustom label='Editar' typeButton='button'></ButtonCustom>
                        </ButtonArea>
                    </Card> 
            </Container> : <></> }
        </>
    )
}

export default ModalClientUpdateDelete;
