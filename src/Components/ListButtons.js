import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import WebIcon from '@material-ui/icons/Web';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            marginTop: theme.spacing(1),
        },
        top: {
            position: 'relative',
            bottom: theme.spacing(12),
        },
        element: {
            margin: theme.spacing(1)
        }
    })
);

export default function ListButtons({ twitterUrl, websiteUrl }) {
    const classes = useStyles();
    return (
        <div className={`${classes.root}`}>
            <IconButton className={`${classes.top} ${classes.element}`} color="primary" aria-label="twitter" href={`https://twitter.com/${twitterUrl}`}>
                <TwitterIcon />
            </IconButton>
            <IconButton className={`${classes.top} ${classes.element}`} color="primary" aria-label="website" href={`${websiteUrl}`}>
                <WebIcon />
            </IconButton>
        </div>
    );
};