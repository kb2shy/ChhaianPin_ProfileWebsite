import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    marginTop: 15,
    marginLeft: 30,
    marginRight:  30,
    marginBottom: theme.spacing(2)
  },
  gridList: {
    marginBottom: 20,
    paddingBottom: 10
  }
})

const PastExperience = withStyles(styles)(({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center">
        Portfolio
      </Typography>
      <Typography variant="h5" align="center">Tourney TV</Typography>
      <Typography variant="subtitle1" align="center">May 2019</Typography>
      <Typography variant="subtitle2" align="center">
        GitHub: <a href="https://github.com/kb2shy/vbtourney2-frontend">Front End Repository</a> | <a href="https://github.com/kb2shy/vbtourney2-backend">Back End Repository</a>
      </Typography>
      <Typography variant="body1" align="center">
        Tourney TV was the final project that I developed solo while attending Flatiron School. I wanted to build a volleyball tournament management system that allowed users to register for a tournament, update their profiles, and keep track of game scores. While I was building this project, I learned how to incorporate websocket technology utilizing Ruby on Rails' ActionCable and styling the React components using Semantic-UI library. The scope of the project became much bigger than I anticipated, yet was able to incorporate the features that I thought was most important for a minimum viable product.
      </Typography>
      <Typography variant="h6" align="center">Key Technologies</Typography>
      <Typography variant="body1" align="center">
        ★ ReactJS ★ Semantic-UI ★ JavaScript ★ Ruby on Rails ★ PostgreSQL ★
      </Typography>
      <Typography variant="body1" align="center">

      </Typography>
      <GridList cellHeight={150} className={classes.gridList} cols={4}>
        <GridListTile>
          <img src="https://via.placeholder.com/150" alt="something"></img>
        </GridListTile>
        <GridListTile>
          <img src="https://via.placeholder.com/150" alt="something"></img>
        </GridListTile>
        <GridListTile>
          <img src="https://via.placeholder.com/150" alt="something"></img>
        </GridListTile>
        <GridListTile>
          <img src="https://via.placeholder.com/150" alt="something"></img>
        </GridListTile>
      </GridList>
      
      <Typography variant="h5" align="center">Create a Criminal</Typography>
      <Typography variant="subtitle1" align="center">April 2019</Typography>
      <Typography variant="subtitle2" align="center">
        GitHub: <a href="https://github.com/kb2shy/SMC-View">Front End Repository</a> | <a href="https://github.com/kb2shy/SMC-Worksheet">Back End Repository</a>
      </Typography>
      <Typography variant="body1" align="center">
        Create-A-Criminal was the first single page application that I developed on my own. My original insporation for this project was to build a form-like feature for a web application at the court house where I worked as a court clerk. The direction of my project changed when I realized that the scope of the project didn't match my skill sets at that time. During the course of this project, I learned Vanilla JavaScript, DOM creation and manipulation, and RESTful API calls and persistent data management.
      </Typography>
      <Typography variant="h6" align="center">Key Technologies</Typography>
      <Typography variant="body1" align="center">
        ★ JavaScript ★ Bootstrap ★ Ruby on Rails ★ PostgreSQL ★ HTML / CSS  ★
      </Typography>
      <Typography variant="body1" align="center">

      </Typography>
      <GridList cellHeight={150} className={classes.gridList} cols={4}>
        <GridListTile>
          <img src="https://via.placeholder.com/150" alt="something"></img>
        </GridListTile>
        <GridListTile>
          <img src="https://via.placeholder.com/150" alt="something"></img>
        </GridListTile>
        <GridListTile>
          <img src="https://via.placeholder.com/150" alt="something"></img>
        </GridListTile>
        <GridListTile>
          <img src="https://via.placeholder.com/150" alt="something"></img>
        </GridListTile>
      </GridList>
      
    </div>
  )
})

export default PastExperience;