import React from 'react';
import skills from '../content/skills';
import { withStyles, Typography, Grid } from '@material-ui/core';
import SkillCard from './SkillCard';
import color from '@material-ui/core/colors/teal';

const styles = theme => ({
  root: {
    backgroundColor: 'black'
  },
  grid: {
    height: 100,
  }

})

const TechnicalSkills = withStyles(styles)(({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center">
        Technical Skills
      </Typography>
      <Grid container className={classes.grid} spacing={2}>
        {
          skills.map((skill, key) => <SkillCard skill={skill} key={key} />)
        }
      </Grid>
    </div>
  )
})

export default TechnicalSkills;