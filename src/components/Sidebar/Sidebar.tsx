import React, { useState } from 'react';
import { Navbar, List, ItemCloseSidebar, DivLink } from './style';
import { Link } from 'react-router-dom';
import sidebarItens from './SidebarItens.json';

const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const showSidebar = () => setOpen(!open);

    // const [fontWeight ,setFontWeight] = useState<string>('');

    let fontWeight = '';

    function verifyPath(item: string) {
        let path = window.location.pathname;
        console.log(path, item);
        // return path === item ? setFontWeight('700') : setFontWeight('400');

        if (path === item) {
            fontWeight = '700';
        } else {
            fontWeight = '400';
        }
    }

    return (
        <>
            <Navbar open={open ? 0 : -15.5}>
                <List>
                    <ItemCloseSidebar onClick={showSidebar} >
                        <p> {open ? 'X' : '='} </p>
                    </ItemCloseSidebar>
                    {
                        sidebarItens.map(item => (
                            <DivLink key={item.name} onClick={() => verifyPath(item.href)} path={fontWeight}>
                                <Link to={item.href} >{item.name}</Link>
                            </DivLink>
                        ))
                    }
                </List>
            </Navbar>
        </>
    );
}

export default Sidebar
