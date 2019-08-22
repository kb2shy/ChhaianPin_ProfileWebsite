import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    margin: 5,
  },
  icon: {
    width: '100%'
  }
})

const SkillCard = withStyles(styles)(({ classes, skill }) => {
  return (
    <Grid item xs={6} sm={4}>
      <Paper className={classes.root}>
        <Grid container>
          <Grid item xs={4} className={classes.icon}>
            <img src={`icons/${skill.icon}`} alt={skill.skill}></img>
          </Grid>
          <Grid item xs={8}>
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