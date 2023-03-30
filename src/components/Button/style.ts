import styled from 'styled-components';

interface ButtonProps {
    typeButt: "delete" | "edit" | "normal" ;
}

// left: ${props => `${props.open}px`};

export const Button= styled.button<ButtonProps>  `
    width: 21.6rem;
    height: 3.9rem;

    margin-top: 4rem;

    cursor: pointer;

    font-size: 1.6rem;
    background-color: ${props => props.typeButt == 'normal' ? '#4DFF00' : props.typeButt == 'delete' ? '#DC1616' : '#6B2BD2' };
    color: #fff;

    border: 1px solid;
    border-radius: 18px;
    border-color: #E1E1E1;

    outline: 0;
    
    transition: 0.2s;

    :hover, :focus {
        transform: scale(1.03);
        background-color: ${props => props.typeButt == 'normal' ? '#4df205' : props.typeButt == 'delete' ? '#E81313' : '#6D27DE' };
        font-size: 1.7rem;
        box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.4);
    }

    :active {
        transform: scale(1.00);
        box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.45);
    }
`