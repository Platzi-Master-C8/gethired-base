import React from 'react';
import { ThemeProvider } from '@mui/material';

import { THEME } from 'Constants/theme.constant';

import Routes from 'Routes';

import 'Styles/style.scss';

const App = () => (
    <React.StrictMode>
        <ThemeProvider theme={THEME}>
            <Routes />
        </ThemeProvider>
    </React.StrictMode>
);

export default App;
