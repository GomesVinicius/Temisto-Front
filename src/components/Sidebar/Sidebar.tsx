import React, { useState } from 'react'
import { Navbar, List, ItemCloseSidebar, ItemList, DivLink } from './style';
import { Link } from 'react-router-dom';
import sidebarItens from './SidebarItens.json';

const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(true);
    const showSidebar = () => setOpen(!open);

    const path = window.location.pathname;

    return (
        <>
            <Navbar open={open ? 0 : -15.5} onClick={showSidebar}>
                <List>
                    <ItemCloseSidebar>
                        <DivLink>
                            <Link to='#'> = </Link>
                        </DivLink>
                    </ItemCloseSidebar>
                    {
                        sidebarItens.map(item => (
                            <>
                                <DivLink path={path === item.href ? '700' : '400'}>
                                    <Link to={item.href} key={item.name}>{item.name}</Link>
                                </DivLink>
                            </>
                        ))
                    }
                </List>
            </Navbar>
        </>
    );
}

export default Sidebar
