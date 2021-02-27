import React, { InputHTMLAttributes } from 'react';
import { Input } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name?: string;
}

const InputCustom: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <>
            {/* <label htmlFor={name}>{label}</label> */}
            <Input type="text" autoComplete="off" placeholder={label} id={name} {...rest} />
        </>
    );
}

export default InputCustom;