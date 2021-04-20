import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"
import Resume from './images/resume.pdf'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        My Portfolio
                    </Typography>
                    <Button component={Link} to="/" color="inherit">Home</Button>
                    <Button href={Resume} download>Resume</Button>
                    <Button component={Link} to="/contact" color="inherit">Contact</Button>
                    <Button component={Link} to="/about" color="inherit">About</Button>
                    <Button component={Link} to="/projects" color="inherit">Projects</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}