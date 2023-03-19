import styled from 'styled-components';

export const Title = styled.h1`
    display: flex;
    justify-content: center;

    font-size: 4.3rem;
    font-weight: 500;
    padding-bottom: 100px;
`

export const TableArea = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 90rem;
    height: 45rem;

    border-radius: 16px;
    
    /* background-color: #f2f2f2; */
    /* background-color: #f7f7f7; */
`
export const Table = styled.table`
    border-collapse: collapse;

    width: 95%;
    height: 95%;

    overflow: ;

    font-family: 'Roboto';

    box-shadow: 8px 8px 8px #dbdbdb;
`

export const TableHead = styled.thead`
    border: 1px solid black;
    border-radius: 16px;
`

export const TableHeadCollumn = styled.th`
    font-weight: 700;
    font-size: 1.7rem;
    border-bottom: 1px solid black;

    padding: 4px;
`

export const TableBody = styled.tbody`
    text-align: center;
`

export const TableRow = styled.tr`
    :nth-child(even) {
        background-color: #dbdbdb;
    }

    :hover {
        background-color: #cfcfcf;
    }
`

export const TableColumn = styled.td`
    font-weight: 400;
    font-size: 1.3rem;
    border: 1px solid black;

    padding: 4px;
`
