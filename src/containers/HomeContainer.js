import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Home from '../components/Home';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: '100%',
    width: '100%',
  }
})

const HomeContainer = withStyles(styles)(({ classes }) => {
  return (
    <Grid>
      <Paper className={classes.paper}>
        <Home />
      </Paper>
    </Grid>
  )
})

export default HomeContainer;