import styled from 'styled-components';

export const Input = styled.input `
    width: 18.6rem;
    height: 3.9rem;
    margin-bottom: 40px;

    border-radius: 18px;
    border: 0px solid;
    padding: 0 1.5rem;

    font-size: 1.3rem;
    background-color: #E1E1E1;

    outline: 0;

    transition: 0.2s;

    :focus {
        transform: scale(1.08);
        box-shadow: 3px 4px 4px rgba(12, 12, 12, 0.25);
    }
`