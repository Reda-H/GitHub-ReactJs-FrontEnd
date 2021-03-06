import { InputAdornment, TextField, Grid, IconButton, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        width: theme.spacing(64),
        height: theme.spacing(32),
    },
    margin: {
        margin: theme.spacing(1),
    },
    textField: {
        width: '75%',
    },
    form: {
        alignItems: 'center',
        justifyItems: 'center',
    },
    button: {
        color: 'linear-gradient(45deg, #516395 20 %, #614385 90 %)',
    }
}))

export default function UsernameInput({ setUsername, formSubmit }) {
    const classes = useStyles();
    return (
        <div className={`${classes.root} div-username-input`}>
            <Paper className={`${classes.paper}`} elevation={4}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: '100%' }}>

                    <form method='POST' id={'gatherUsername'} onSubmit={formSubmit} className={`${classes.form}`}>
                        <Grid container
                            direction="row"
                            justify="center"
                            alignItems="center">
                            <TextField
                                label={<Typography variant={'button'}> Enter your username </Typography>}
                                id="standard-start-adornment"
                                type="text"
                                className={`${classes.margin} ${classes.textField}`}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">github.com/</InputAdornment>,
                                }}
                                onChange={(e) => {setUsername(e.target.value)}}
                                placeholder={'username'}
                            />
                            <IconButton
                                type="submit"
                                form="gatherUsername"
                                color="primary"
                                className={`${classes.button}`}
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Grid>
                    </form>
                </Grid>
            </Paper>
        </div>
    );
}