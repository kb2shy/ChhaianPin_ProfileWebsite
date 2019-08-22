import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    height: 100,
    margin: 5,
  }
})

const SkillCard = withStyles(styles)(({ classes, skill }) => {
  return (
    <Grid item xs={6} sm={4}>
      <Paper className={classes.root}>
          <img src={`icons/${skill.icon}`} alt={skill.skill}></img>
          <Typography variant="h6">
            {skill.skill}
          </Typography>
          <Rating value={skill.rating} readOnly />
      </Paper>
    </Grid>
  )
})

export default SkillCard;