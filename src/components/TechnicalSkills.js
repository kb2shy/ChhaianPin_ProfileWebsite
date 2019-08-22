import React from 'react';
import skills from '../content/skills';
import { withStyles, Typography, Paper } from '@material-ui/core';
import SkillCard from './SkillCard';

const styles = theme => ({

})

const TechnicalSkills = withStyles(styles)(({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center">
        Technical Skills
      </Typography>
      <Paper>
        {
          skills.map((skill, key) => <SkillCard skill={skill} key={key} />)
        }
      </Paper>
    </div>
  )
})

export default TechnicalSkills;