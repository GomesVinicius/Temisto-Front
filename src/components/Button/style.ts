import styled from 'styled-components';

export const Button = styled.button `
    width: 21.6rem;
    height: 3.9rem;

    margin-top: 4rem;

    cursor: pointer;

    font-size: 1.6rem;
    background-color: #4DFF00;
    color: #fff;

    border: 1px solid;
    border-radius: 18px;
    border-color: #CBCBCB;

    outline: 0;
    
    transition: 0.2s;

    :hover, :focus {
        transform: scale(1.03);
        background-color: #4df205;
        font-size: 1.7rem;
        box-shadow: 3px 4px 4px rgba(68, 224, 0, 0.45);
    }

    :active {
        transform: scale(1.00);
        box-shadow: 2px 3px 3px rgba(68, 224, 0, 0.45);
    }
`