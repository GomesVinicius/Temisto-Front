import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/Login/login';
import Plants from '../pages/Plants/plants';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route path="/plants" component={Plants} />
        </BrowserRouter>
    )
}

export default Routes;
