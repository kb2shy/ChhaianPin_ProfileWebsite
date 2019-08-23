import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
  },
  icon: {
    width: '100%',
    paddingRight: 5,
    marginRight: 5
  }
})

const SkillCard = withStyles(styles)(({ classes, skill }) => {
  return (
    <Grid item xs={6} sm={4}>
      <Paper className={classes.root}>
        <Grid container justify="space-around" alignItems="center">
          <Grid item xs={3} className={classes.icon} >
            <img src={`icons/${skill.icon}`} alt={skill.skill}></img>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h6">
              {skill.skill}
            </Typography>
            <Rating value={skill.rating} readOnly />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
})

export default SkillCard;