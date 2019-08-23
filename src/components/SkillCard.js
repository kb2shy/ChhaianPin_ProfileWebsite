import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 88,
    padding: theme.spacing(1)
  },
  typography: {
    marginLeft: 5
  }

})

const SkillCard = withStyles(styles)(({ classes, skill }) => {
  return (
    <Grid item xs={12} sm={3} className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container justify="space-around" alignItems="center">
          <Grid item xs={3} className={classes.icon}>
              <img src={`icons/${skill.large_icon}`} alt={skill.skill}></img>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body1" className={classes.typography}>
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