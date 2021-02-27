import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    typeButton: "submit" | "button";
}

const ButtonCustom: React.FC<ButtonProps> = ({ label, typeButton, ...rest }) => {
    return (
        <>
            <Button type={typeButton} {...rest}>
                {label}
            </Button>
        </>
    )
}

export default ButtonCustom;
