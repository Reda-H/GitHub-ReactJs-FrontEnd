// @flow
import { Card, Collapse, Container, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import * as React from 'react';
import { FollowerAvatar } from './FollowerAvatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    cardMargin: {
        margin: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    contentHeader: {
        marginTop: theme.spacing(2),
        justifyContent: 'space-between'
    },
    headerWidth: {
        width: '80%',
        margin: 0,
    }
}));

export default function ListFollows({ listFollowers, listFollowed }) {
    const classes = useStyles();
    const [followerExpanded, setFollowerExpanded] = React.useState(true)
    const [followedExpanded, setFollowedExpanded] = React.useState(true)
    

    const handleFollowerExpandClick = () => {
        setFollowerExpanded(!followerExpanded);
    };
    const handleFollowedExpandClick = () => {
        setFollowedExpanded(!followedExpanded);
    };

    return (
        <Container >
            <Card className={`${classes.cardMargin}`}>
                <Container className={`${classes.contentHeader}`}>
                    <Grid container direction="row" onClick={handleFollowerExpandClick}>
                        <Typography className={`${classes.headerWidth}`} variant={'h5'}>
                            Followers
                    </Typography>
                        <IconButton
                            className={clsx(classes.expand, { [classes.expandOpen]: followerExpanded, })} onClick={handleFollowerExpandClick} aria-expanded={followerExpanded} aria-label="show more">
                            <ExpandMoreIcon />
                        </IconButton>
                    </Grid>
                </Container>
                <Divider />
                <Collapse in={followerExpanded}>
                    <Grid container alignItems="flex-start" justify="center">
                        {
                            listFollowers !== null ?
                                listFollowers.length !== 0 ?
                                    listFollowers.map((item, index) => { return <FollowerAvatar follower={item} /> })
                                    :
                                    null
                                :
                                null
                        }
                    </Grid>
                </Collapse>
            </Card>
            <Card className={`${classes.cardMargin}`}>
                <Container className={`${classes.contentHeader}`}>
                    <Grid container direction="row" onClick={handleFollowedExpandClick}>
                        <Typography className={`${classes.headerWidth}`} variant={'h5'}>
                            Following
                    </Typography>
                        <IconButton
                            className={clsx(classes.expand, { [classes.expandOpen]: followedExpanded, })} onClick={handleFollowedExpandClick} aria-expanded={followedExpanded} aria-label="show more">
                            <ExpandMoreIcon />
                        </IconButton>
                    </Grid>
                </Container>
                <Divider />
                <Collapse in={followedExpanded}>
                    <Grid container alignItems="flex-start" justify="center">
                        {
                            listFollowed !== null ?
                                listFollowed.length !== 0 ?
                                    listFollowed.map((item, index) => { return <FollowerAvatar follower={item} /> })
                                    :
                                    null
                                :
                                null
                        }
                    </Grid>
                </Collapse>
            </Card>
        </Container>
    );
};