import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        // background: 'transparent',
    },
    offset: theme.mixins.toolbar,
}))


function Header({username}) {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" color={'inherit'} className={`${classes.appBar}`}>
                <Toolbar>
                    <Typography variant={`h6`} color="textPrimary">Made by <Link>Herradi Reda</Link> for {username}</Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </div>
    );
}

export default Header;