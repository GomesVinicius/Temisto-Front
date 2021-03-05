import styled from 'styled-components';

interface NavbarProps {
    open?: number;
}

interface DivLinkProps {
    path?: string;
}

export let test:NavbarProps;

export const Navbar = styled.div<NavbarProps>`
    
    left: ${(teste: NavbarProps) => `${teste.open}%`};
    background-color: white;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    width: 22rem;
    height: 100%;
    left: 0;
    position: fixed;
    transition: 850ms;

    border-right: 1px solid black;
`

export const List = styled.ul`
    list-style-type: none;
    width: 100%;
    margin-right: 1.2rem;
`

export const ItemCloseSidebar = styled.li<NavbarProps>`
    left: ${props => `${props.open}%`};
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

export const DivLink = styled.div<DivLinkProps>`
    background: none;
    display: flex;
    justify-content: center;
    transition: 0.2ms;
    margin: 2rem 0;

    a {
        font-weight: ${props => `${props.path}`};
        color: black;
        font-size: 2rem;
        background: none;
        justify-content: center;
        text-decoration: none;
        transition: 0.2s;

    :hover, :active {
        transform: scale(1.08);
    }
    }
`

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
