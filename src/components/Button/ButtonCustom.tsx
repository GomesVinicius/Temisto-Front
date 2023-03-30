import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    typeButton: "submit" | "button";
    buttonEffect?: 'delete' | 'edit' | 'normal'
}

const ButtonCustom: React.FC<ButtonProps> = ({ label, typeButton, buttonEffect, ...rest }) => {
    return (
        <>
            <Button type={typeButton} typeButt={buttonEffect || 'normal' } {...rest}>
                {label}
            </Button>
        </>
    )
}

export default ButtonCustom;
