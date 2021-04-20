import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: 'flex'
    },
    paper: {
        width: '50%',
        height: "90vh",
        position: 'relative'
    },
    img: {
        objectFit: "cover",
        width: "100%",
        maxHeight: "90vh",
    },
    title: {
        color: 'black',
        paddingBottom: "30px"
    },
    body: {
        color: 'black'
    }

}));

export default function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <img className={classes.img} alt='img' src="http://placekitten.com/200/300" />
            </Paper>
            <Paper className={classes.paper} elevation={3}>
                <Typography className={classes.title} variant='h3'>Hello this is makeStyles</Typography>
                <Typography className={classes.body} variant='body1'>Hey i am cool and like apple pie</Typography>
            </Paper>
        </div>
    );
}

