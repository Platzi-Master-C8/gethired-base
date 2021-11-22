import { createTheme } from '@mui/material';
import { COLORS } from './colors.constants';

export const THEME = createTheme({
    typography: {
        fontFamily: ['Montserrat', 'Mulish'].join(','),
        h1: {
            fontFamily: 'Mulish',
            fontSize: 40,
            fontWeight: 700,
            lineHeight: '50.2px',
        },
        h2: {
            fontFamily: 'Mulish',
            fontSize: 21,
            fontWeight: 600,
            lineHeight: '26.36px',
        },
        h3: {
            fontFamily: 'Mulish',
            fontSize: 16,
            fontWeight: 600,
            lineHeight: '20px',
        },
        subtitle1: {
            fontFamily: 'Mulish',
            fontSize: 18,
            fontWeight: 600,
            lineHeight: '20px',
        },
        body1: {
            fontFamily: 'Mulish',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '20px',
        },
        body2: {
            fontFamily: 'Mulish',
            fontSize: 14,
            fontWeight: 300,
            lineHeight: '18px',
        },
        button: {
            fontFamily: 'Mulish',
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: '20px',
        },
        button2: {
            fontFamily: 'Mulish',
            fontSize: 12,
            fontWeight: 'bold',
            lineHeight: '15px',
        },
        caption: {
            fontFamily: 'Mulish',
            fontSize: 12,
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
