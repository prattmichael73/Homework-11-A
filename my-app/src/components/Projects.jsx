import React from 'react'
import Grid from '@material-ui/core/Grid';
import Project from './Project'
import Typography from '@material-ui/core/Typography';
import WeatherApp from './images/weatherapp.png'
import Project1 from './images/Project1.png'
import PasswordGenerator from '.images/PasswordGenerator.png'


const projectsArr = [
    { title: "Weather App", image: WeatherApp, description: "This is my weather app" },
    { title: "Radio Finder", image: Project1, description: "This is my first project" },
    { title: "Password Generator", image: PasswordGenerator, description: "This is one of of assignments" },

]


export default function Projects() {
    return (
        <div style={{ marginTop: '20px' }}>
            <Typography variant="h3">These are my projects!</Typography>
            <Grid container justify='center' spacing={10}>
                {
                    projectsArr.map(project => (
                        <Grid item>
                            <Project title={project.title} image={project.image} description={project.description} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}