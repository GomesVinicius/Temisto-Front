import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Clients from '../pages/Clients/clients';
import Config from '../pages/Configurations/Config';
import Home from '../pages/Home/home';

import Login from '../pages/Login/login';
import Plants from '../pages/Plants/plants';
import Providers from '../pages/Provider/providers';
import Sales from '../pages/Sales/sales';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Sidebar />
            <Route path="/plants" component={Plants} />
            <Route path="/clients" component={Clients} />
            <Route path="/sales" component={Sales} />
            <Route path="/providers" component={Providers} />
            <Route path="/configs" component={Config} />
            <Route path="/home" component={Home} />
        </BrowserRouter>
    )
}

export default Routes;
