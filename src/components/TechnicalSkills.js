import React, { useState } from 'react';
import skillsObject from '../content/skills';
import { withStyles, Typography, Grid } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import SkillCard from './SkillCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 30,
    marginRight: 30
  }
})

const TechnicalSkills = withStyles(styles)(({ classes }) => {
  const [sortByName, setSortByName] = useState(false);
  const [skills, setSkills] = useState(skillsObject);

  const toggleSortByName = () => {
    setSortByName(!sortByName);
    sortSkillsByName(skills);
  }

  const sortSkillsByName = (skills) => {
    const result = skills.sort((a, b) => (a.skill > b.skill) ? 1 : -1)
    setSkills(result);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Technical Skills
      </Typography>
      <Switch checked={sortByName} onChange={toggleSortByName} value={sortByName}>
        {console.log(sortByName)}
        {console.log(skills)}
      </Switch>
      <Grid container className={classes.grid} spacing={1}>
        {
          skills.map((skill, key) => <SkillCard skill={skill} key={key} />)
        }
      </Grid>
    </div>
  )
})

export default TechnicalSkills;