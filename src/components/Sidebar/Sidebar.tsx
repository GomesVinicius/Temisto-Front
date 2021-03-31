import React, { useState } from 'react';
import { Navbar, List, ItemCloseSidebar, DivLink } from './style';
import { Link } from 'react-router-dom';
import sidebarItens from './SidebarItens.json';

import { IoMdClose, IoIosArrowForward } from 'react-icons/io';

const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const showSidebar = () => setOpen(!open);

    // const [fontWeight ,setFontWeight] = useState<string>('');

    let fontWeight = '';

    return (
        <>
            <Navbar open={open ? 0 : -205}>
                <List>
                    <ItemCloseSidebar onClick={showSidebar} >
                        {open ? <IoMdClose color="#8C00FF" /> : <IoIosArrowForward color="#8C00FF" />}
                    </ItemCloseSidebar>
                    {
                        sidebarItens.map(item => (
                            <DivLink key={item.name} color={open ? 'black' : 'white'}>
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
