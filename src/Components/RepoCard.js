import * as React from 'react';
import { Badge, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
        root: {
            width: 300,
        },
        media: {
            height: 0,
            paddingTop: '100%', // 16:9
            margin: theme.spacing(1)
        },
        margin: {
            margin: theme.spacing(1),
        },
        margin2: {
            margin: theme.spacing(3),
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
        cardAction: {
            justifyContent: 'space-between'
        },
        oneEdgeShadow: {
            boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
        },
        noMargin: {
            margin: 0,
        },
        colorIcon: {
            color: '#000'
        }
    }));



export default function RepoCard({ repo, pickLanguageImage }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card key={repo.id} id={repo.id} className={`${classes.root} ${classes.oneEdgeShadow} ${classes.margin2}`}>
            <CardHeader
                title={<Typography variant="h5" noWrap>{repo.name}</Typography>}
                subheader={`by ${repo.owner.login}`}
            />
            <CardMedia className={classes.media} image={pickLanguageImage(repo.language)} title={`${repo.language}`} />  {/* Add Language processing*/}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {`${repo.language}`}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardAction}>
                <IconButton aria-label="link" href={repo.html_url} target="_blank" >
                    <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} badgeContent={repo.private ? <LockOutlinedIcon fontSize="small" /> : <LockOpenOutlinedIcon fontSize="small" />}>
                        <GitHubIcon className={`${classes.colorIcon}`} />
                    </Badge>
                </IconButton>
                <Button variant="outlined" size="small" color="primary" className={classes.margin} href={`https://github.com/${repo.owner.login}/${repo.name}/stargazers`} target="_blank" endIcon={<StarBorderIcon />}>{repo.stargazers_count}</Button>
                {
                    repo.description ?
                        <IconButton onClick={handleExpandClick}>
                            <ExpandMoreIcon />
                        </IconButton>
                        :
                        null
                }
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        {repo.description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};