import React, { useState } from 'react'
import { Navbar, List, ItemCloseSidebar, ItemList, Link as Teste } from './style';
import { Link } from 'react-router-dom';
import sidebarItens from './SidebarItens.json';

const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(true);
    const showSidebar = () => setOpen(!open);

    return (
        <>
            <Navbar open={open ? 0 : -15.5} onClick={showSidebar}>
                <List>
                    <ItemCloseSidebar>
                        <Link to='#'> {open ? 'X' : '='} </Link>
                    </ItemCloseSidebar>
                    {
                        sidebarItens.map(item => (
                            <Teste href={item.href} key={item.name}>{item.name}</Teste>
                        ))
                    }
                </List>
            </Navbar>
        </>
    );
}
export default Sidebar
