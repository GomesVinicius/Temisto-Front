import styled from 'styled-components';

interface NavbarProps {
    open: number;
}

export const Navbar = styled.div<NavbarProps>`
    background-color: white;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    width: 22rem;
    height: 100%;
    left: ${props => `${props.open}%`};
    position: fixed;
    transition: 850ms;

    border-right: 1px solid black;
`

export const List = styled.ul`
    list-style-type: none;
    width: 100%;
    margin-right: 1.2rem;
`
export const ItemCloseSidebar = styled.li`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font: 50px 'Nunito';
`

export const ItemList = styled.li`
    color: black;
    font-size: 2rem;
    background: none;
    display: flex;
    justify-content: center;
    transition: 0.2ms;

    :hover, :active {
        font-weight: 700;
    }
`

export const Link = styled.a`
    color: black;
    font-size: 2rem;
    background: none;
    display: flex;
    justify-content: center;
    transition: 0.2ms;
    text-decoration: none;
    margin: 2rem 0;

    :hover, :active {
        font-weight: 700;
    }
    /* text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
    outline: 0; */
`

//
export const MenuBars = styled.a`
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
`
export const Nav = styled.nav`
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
`
