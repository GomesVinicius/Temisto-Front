import React, { HTMLAttributes } from 'react';
import { Container } from './styles';

interface ModalPropps extends HTMLAttributes<HTMLDivElement> {
    test?: string;
    layout: React.FC;
}

const ModalCustom: React.FC<ModalPropps> = ({ layout: Layout ,...rest }) => {
    return (
        <>
            <Container {...rest}>
                Testando
                <Layout />
            </Container>
        </>
    )
}

export default ModalCustom;
