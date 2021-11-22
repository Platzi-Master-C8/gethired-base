import React from 'react';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

import 'Styles/themeExample.scss';
import { COLORS } from 'Constants/colors.constants';

const useStyle = makeStyles({
    colorContent: {
        display: 'grid',
        gap: 10,
        gridTemplateColumns: 'repeat(auto-fill, 60px)',
    },
    boxColor: {
        width: 60,
        height: 60,
    },
});

const Theme = () => {
    const css = useStyle();
    return (
        <Container maxWidth="md">
            <Accordion>
                <AccordionSummary>
                    <Typography>Typography</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="content">
                        <Typography variant="h1">h1. Heading</Typography>
                        <Typography variant="h2">h2. Heading</Typography>
                        <Typography variant="h2" fontFamily="Montserrat">
                            h2.(Montserrat) Heading
                        </Typography>
                        <Typography variant="h3">h3. Heading</Typography>
                        <Typography variant="subtitle1" fontFamily="Montserrat">
                            subtitle1.(Montserrat) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur
                        </Typography>
                        <Typography variant="subtitle1">
                            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        </Typography>
                        <Typography variant="body1" fontFamily="Montserrat">
                            body1.(Montserrat) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
                            tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
                            numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
                        <Typography variant="body1">
                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
                        <Typography variant="body2" fontFamily="Montserrat">
                            body2.(Montserrat) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
                            tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
                            numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
                        <Typography variant="body2">
                            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
                        <Typography variant="button" display="block">
                            button text
                        </Typography>
                        <Typography variant="caption" display="block">
                            caption text
                        </Typography>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography>Colors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={css.colorContent}>
                        {Object.keys(COLORS).map((key) => (
                            <div style={{ background: COLORS[key] }} className={css.boxColor} key={key} />
                        ))}
                    </div>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default Theme;
