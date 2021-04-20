
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        flexDirection: "column",
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function Links() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <Typography className={classes.root}>
            <Typography variant='h2' href="https://github.com/prattmichael73" onClick={preventDefault}>
                MyGithub
            </Typography>
            <Typography variant="h2" color="inherit">
                My email: myemail@gmail.com
            </Typography>
            <Typography variant='h2'> Phone number : 2839023892302</Typography>


        </Typography>
    );
}