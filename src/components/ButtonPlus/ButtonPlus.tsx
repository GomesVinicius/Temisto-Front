import React, { ButtonHTMLAttributes } from 'react'
import { Container, Icon, Text } from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    func: Function;
}

const ButtonPlus: React.FC<ButtonProps> = ({ func, ...rest }) => {
    return (
        <>
            <Container onClick={() => func()}>
                <Icon>
                    <Text> + </Text>
                </Icon>
            </Container>
        </>
    )
}

export default ButtonPlus;
