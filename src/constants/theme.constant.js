import { createTheme } from '@mui/material';
import { COLORS } from './colors.constants';

export const THEME = createTheme({
    typography: {
        fontFamily: ['Montserrat', 'Mulish'].join(','),
        h1: {
            fontFamily: 'Mulish',
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: '50.2px',
        },
        h2: {
            fontFamily: 'Mulish',
            fontSize: '1.3125rem',
            fontWeight: 600,
            lineHeight: '26.36px',
        },
        h3: {
            fontFamily: 'Mulish',
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: '20px',
        },
        subtitle1: {
            fontFamily: 'Mulish',
            fontSize: '1.125rem',
            fontWeight: 600,
            lineHeight: '20px',
        },
        body1: {
            fontFamily: 'Mulish',
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '20px',
        },
        body2: {
            fontFamily: 'Mulish',
            fontSize: '0.875rem',
            fontWeight: 300,
            lineHeight: '18px',
        },
        button: {
            fontFamily: 'Mulish',
            fontSize: '1rem',
            fontWeight: 'bold',
            lineHeight: '20px',
        },
        button2: {
            fontFamily: 'Mulish',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            lineHeight: '15px',
        },
        caption: {
            fontFamily: 'Mulish',
            fontSize: '0.75rem',
            fontWeight: 300,
            lineHeight: '15px',
        },
    },
    palette: {
        secondary: {
            main: COLORS.secondary,
        },
        text: {
            primary: COLORS.textMain,
        },
        warning: {
            main: COLORS.warning,
        },
        error: {
            main: COLORS.error,
        },
    },
});
