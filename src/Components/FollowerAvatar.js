// @flow
import { Avatar, Button, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    container: {
        margin: 'auto',
    },
    outlined: {
        border: '1px solid #648DAE',
        borderRadius: '15px',
        padding: '2px',
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export function FollowerAvatar({ follower }) {
    const classes = useStyles();
    return (
        <div key={follower.id} className={`${classes.root}`}>
            <Button variant="outlined" href={`${follower.html_url}`} target="_blank">
                <Grid className={`${classes.container}`} container direction="row" justify="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <Avatar alt={`${follower.login.replace(/^\w/, (c) => c.toUpperCase())}`} src={`${follower.avatar_url}`} className={classes.large} />
                    </Grid>
                    <Grid item>
                        <Typography >{follower.login}</Typography>
                    </Grid>
                </Grid>
            </Button>
        </div>
    );
};