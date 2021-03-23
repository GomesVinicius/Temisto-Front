import styled from 'styled-components';

interface ContainerProps {
    transparent: string;
}

export const Container = styled.div<ContainerProps> `
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

    background-color: ${props => `${props.transparent}`};

    transition: 0.2s;
`

export const TableArea = styled.div `
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    width: 90rem;
    height: 50rem;

    border-radius: 16px;
    
    background-color: #808080;
`
export const Table = styled.table `
    border: 1px solid black;
    border-radius: 16px;
    width: 95%;
    height: 95%;

    font-family: 'Roboto';
`

export const TableHead = styled.thead `
`

export const TableHeadCollumn = styled.th `
    font-weight: 700;
    font-size: 1.7rem;
    border-bottom: 1px solid black;
`

export const TableBody = styled.tbody `
    text-align: center;
`

export const TableRow = styled.tr `
    
`

export const TableColumn = styled.td `
    font-weight: 400;
    font-size: 1.3rem;
`
