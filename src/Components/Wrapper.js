import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import mountains from '../Assets/Images/mountains_background.jfif';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: mountains
    }
}))

export default function Wrapper({style, children}) {
    const classes = useStyles();
  return (
    <Container style={style} className={`${classes.root}`}>
      {children}
    </Container>
  );
};