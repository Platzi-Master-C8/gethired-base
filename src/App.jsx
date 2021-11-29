import React from 'react';
import { ThemeProvider } from '@master-c8/theme';

import Routes from 'Routes';

import 'Styles/style.scss';

const App = () => (
    <React.StrictMode>
        <ThemeProvider>
            <Routes />
        </ThemeProvider>
    </React.StrictMode>
);

export default App;
