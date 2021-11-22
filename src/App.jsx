import React from 'react';
import Theme from 'Pages/Theme';
import { ThemeProvider } from '@mui/material';
import { THEME } from 'Constants/theme.constant';
import './style.scss';

const App = () => (
    <React.StrictMode>
        <ThemeProvider theme={THEME}>
            <Theme />
        </ThemeProvider>
    </React.StrictMode>
);

export default App;
