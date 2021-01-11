import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(25),
            height: theme.spacing(25),
        },
        top: {
            position: 'relative',
            bottom: theme.spacing(12),
        },
        centered: {
            display: 'block',
            margin: 'auto',
        },
        shadow: {
            boxShadow: theme.shadows[3],
            border: 'solid 1 black'
        },
        textCentered: {
            textAlign: 'center',
        },
        textMargin: {
            marginTop: '2vh',
        },
        linkDecoration: {
            textDecoration: 'none',
        }
    }),
);

export default function AvatarComponent({ link, username, login }) {
    const classes = useStyles();
    return (
        <div className={`${classes.top}`}>
            <Avatar alt={username} src={`${link}`} className={`${classes.large} ${classes.shadow} ${classes.centered}`} />
            <Typography variant={`h5`} color="textPrimary" className={`${classes.textCentered} ${classes.textMargin}`}>
                {username}
            </Typography>
            <a className={`${classes.linkDecoration}`} href={`https://github.com/${login}`}>
                <Typography variant={`h6`} color="textPrimary" className={`${classes.textCentered} ${classes.textMargin}`}>
                    {'{ ' + login + ' }'}
                </Typography>
            </a>
        </div>
    );
};