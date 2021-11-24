import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Theme from 'Pages/Theme';
import NotFound from 'Pages/NotFound';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Theme />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
