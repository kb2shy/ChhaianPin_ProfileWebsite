import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
  },
  paper: {
    padding: 30,
  }
})

const PastExperience = withStyles(styles)(({ classes }) => {
  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h4" align="center">
          Portfolio
        </Typography>
        <Paper className={classes.paper}>
          <img></img>
        </Paper>
      </Container>
    </div>
  )
})

export default PastExperience;