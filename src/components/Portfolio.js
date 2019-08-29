import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
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
  },
  tile: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
})

const PastExperience = withStyles(styles)(({ openImage, classes, width }) => {
  const getGridListCols = () => {
    if (isWidthUp('sm', width)) {
      return 4;
    }

    if (isWidthUp('xs', width)) {
      return 2;
    }
  }

  return (
    <div className={classes.root} id="portfolio">
      <Typography variant="h4" align="center">
        Portfolio
      </Typography>
      <Typography variant="h5" align="center">Tourney TV</Typography>
      <Typography variant="subtitle1" align="center">May 2019</Typography>
      <Typography variant="subtitle2" align="center">
        GitHub: <a href="https://github.com/kb2shy/vbtourney2-frontend" target="_blank" rel="noopener noreferrer">Front End Repository</a> | <a href="https://github.com/kb2shy/vbtourney2-backend" target="_blank" rel="noopener noreferrer">Back End Repository</a>
      </Typography>
      <Typography variant="body1" align="center" className={classes.typography}>
        Tourney TV was the final project that I developed solo while attending Flatiron School. I wanted to build a volleyball tournament management system that allowed users to register for a tournament, update their profiles, and keep track of game scores. While I was building this project, I learned how to incorporate websocket technology utilizing Ruby on Rails' ActionCable and styling React components with Semantic-UI. I had roughly three weeks to build my project and discovered that the scope kept increasing with new developments. Within the time frame, I was able to:
      </Typography>
      <div>
        <ul style={{listStyleType: 'none'}}> 
          <li>♦  Build a back-end server with Ruby on Rails and persist data with PostgreSQL.</li>
          <li>♦  Develop an authentication system using JSON web tokens.</li>
          <li>♦  Stream RESTful API data between client and server in real-time.</li>
          <li>♦  Develop a front-end client in React and dynamically render components in a desktop browser.</li>
        </ul>
      </div>
      <Typography variant="h6" align="center">Key Technologies</Typography>
      <Typography variant="body1" align="center">
        ★ ReactJS ★ Semantic-UI ★ JavaScript ★ Ruby on Rails ★ PostgreSQL ★
      </Typography>
      <Typography variant="body1" align="center">

      </Typography>
      <GridList cellHeight={150} className={classes.gridList} cols={getGridListCols()}>
        <GridListTile onClick={() => openImage("/img/tourney-1.png")} className={classes.tile}>
          <img src="/img/tourney-1.png" alt="screenshot of tourney project 1"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/tourney-2.png")} className={classes.tile}>
          <img src="/img/tourney-2.png" alt="something"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/tourney-3.png")} className={classes.tile}>
          <img src="/img/tourney-3.png" alt="something"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/tourney-4.png")} className={classes.tile}>
          <img src="/img/tourney-4.png" alt="something"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/tourney-5.png")} className={classes.tile}>
          <img src="/img/tourney-5.png" alt="something"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/tourney-6.png")} className={classes.tile}>
          <img src="/img/tourney-6.png" alt="something"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/tourney-7.png")} className={classes.tile}>
          <img src="/img/tourney-7.png" alt="something"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/tourney-8.png")} className={classes.tile}>
          <img src="/img/tourney-8.png" alt="something"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/tourney-9.png")} className={classes.tile}>
          <img src="/img/tourney-9.png" alt="something"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/tourney-API.png")} className={classes.tile}>
          <img src="/img/tourney-API.png" alt="something"></img>
        </GridListTile>
      </GridList>
      
      <Typography variant="h5" align="center">Create a Criminal</Typography>
      <Typography variant="subtitle1" align="center">April 2019</Typography>
      <Typography variant="subtitle2" align="center">
        GitHub: <a href="https://github.com/kb2shy/SMC-View" target="_blank" rel="noopener noreferrer">Front End Repository</a> | <a href="https://github.com/kb2shy/SMC-Worksheet" target="_blank" rel="noopener noreferrer">Back End Repository</a>
      </Typography>
      <Typography variant="body1" align="center">
        Create-A-Criminal was the first single page application that I developed on my own while attending Flatiron School. My original goal for this project was to build a web application that would have simplified my work as a court clerk. I only had a week to build this web application and the original concept's scope was too large to complete within the time frame. I scaled back the project and focused on features that were within my skill sets. During the course of this project, I learned:
      </Typography>
      <div>
        <ul style={{listStyleType: 'none'}}>
            <li>♦  Programming in Vanilla JavaScript for HTML DOM creation and manipulation.</li>
            <li>♦  Testing and developing RESTful API environments and transactions.</li>
            <li>♦  Styling HTML elements with Bootstrap 4.</li>
          </ul>
      </div>
      <Typography variant="h6" align="center">Key Technologies</Typography>
      <Typography variant="body1" align="center">
        ★ JavaScript ★ Bootstrap ★ Ruby on Rails ★ PostgreSQL ★ HTML / CSS  ★
      </Typography>
      <Typography variant="body1" align="center">

      </Typography>
      <GridList cellHeight={150} className={classes.gridList} cols={getGridListCols()}>
        <GridListTile onClick={() => openImage("/img/crime-1.png")} className={classes.tile}>
          <img src="/img/crime-1.png" alt="something"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/crime-2.png")} className={classes.tile}>
          <img src="/img/crime-2.png" alt="something"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/crime-3.png")} className={classes.tile}>
          <img src="/img/crime-3.png" alt="something"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/crime-6.png")} className={classes.tile}>
          <img src="/img/crime-6.png" alt="something"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/crime-5.png")} className={classes.tile}>
          <img src="/img/crime-5.png" alt="something"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/crime-4.png")} className={classes.tile}>
          <img src="/img/crime-4.png" alt="something"></img>
        </GridListTile>
        <GridListTile onClick={() => openImage("/img/crime-API.png")} className={classes.tile}>
          <img src="/img/crime-API.png" alt="something"></img>
        </GridListTile>
      </GridList>
      
    </div>
  )
})

export default withWidth()(PastExperience);