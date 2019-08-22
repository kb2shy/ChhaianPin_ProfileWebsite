import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Education from '../components/Education';

const styles = theme => ({
  
})

const EducationContainer = withStyles(styles)(({classes}) => {
  return (
    <Grid container spacing={2}>
      <Education />
    </Grid>
  )
})

export default EducationContainer;