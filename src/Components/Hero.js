import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '120px',
        backgroundColor: theme.palette.background.paper,
    }
}))

function Hero({ }) {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <div className={classes.root} />
        </Container>
    );
}

export default Hero;