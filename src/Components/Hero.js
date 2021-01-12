import { Box, Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '150px',
    },
    background: {
        position: 'relative',
        bottom: '10px',
        // background: 'linear-gradient(45deg, #516395 20%, #614385 90%)',
    }
}))

function Hero({ }) {
    const classes = useStyles();
    return (
        <Box className={`${classes.background}`}>
            <div className={classes.root} />
        </Box>
    );
}

export default Hero;