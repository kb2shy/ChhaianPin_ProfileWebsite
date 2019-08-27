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
    marginBottom: 300
  },
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
        Tourney TV was the final project that I developed solo while attending Flatiron School. I wanted to build a volleyball tournament management system that allowed users to register for a tournament, update their profiles, and keep track of game scores. The scope of the project was much bigger than I anticipated and could not complete it within a 3 week time period. However, I am proud of the features that I employed in the product.
      </Typography>
      <Typography variant="h6" align="center">KEY TECHNOLOGIES</Typography>
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
      
        
      
    </div>
  )
})

export default PastExperience;