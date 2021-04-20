import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        height: "50vh",
        position: 'relative'
    },
    img: {
        objectFit: "cover",
        width: "100%",
        maxHeight: "50vh",
    },
    title: {
        position: "absolute",
        top: "15px",
        color: 'white'
    }

}));

export default function SimplePaper() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Typography className={classes.title} variant='h1'>Hello and welcome to my site</Typography>
                <img className={classes.img} alt='img' src="http://placekitten.com/200/300" />
            </Paper>
        </div>
    );
}

