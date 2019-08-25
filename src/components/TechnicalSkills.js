import React from 'react';
import skills from '../content/skills';
import { withStyles, Typography, Grid } from '@material-ui/core';
import SkillCard from './SkillCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 30,
    marginRight: 30
  }
})

const TechnicalSkills = withStyles(styles)(({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Technical Skills
      </Typography>
      <Grid container className={classes.grid} spacing={1}>
        {
          skills.map((skill, key) => <SkillCard skill={skill} key={key} />)
        }
      </Grid>
    </div>
  )
})

export default TechnicalSkills;