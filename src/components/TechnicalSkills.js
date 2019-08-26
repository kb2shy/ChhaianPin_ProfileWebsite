import React, { useState } from 'react';
import skills from '../content/skills';
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

  const [skillsContent, setSkillsContent] = useState(skills);
  const [onSort, setOnSort] = useState(false);

  const handleChange = () => {
    setOnSort(!onSort);
    (onSort) ? setSkillsContent(skills) : sortSkillsContent();
  }

  const sortSkillsContent = () => {
    const result = skillsContent.concat().sort((a, b) => (a.skill < b.skill) ? -1 : 1)
    setSkillsContent(result)
  }
  
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Technical Skills
      </Typography>
      <Switch checked={onSort} onChange={handleChange}/>
      <label>Sort by Skill Name</label>
      <Grid container className={classes.grid} spacing={1}>
        {
          skillsContent.map((skill, key) => <SkillCard skill={skill} key={key} />)
        }
      </Grid>
    </div>
  )
})

export default TechnicalSkills;