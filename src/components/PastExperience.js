import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
  }
})

const PastExperience = withStyles(styles)(({ classes }) => {
  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h4" align="center">
          Past Experience
        </Typography>
      </Container>
    </div>
  )
})

export default PastExperience;