import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  
})

const SkillsContainer = withStyles(styles)(({ classes }) => {

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Technology
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
})

export default SkillsContainer;