import React, { useState } from 'react';
import skills from '../content/skills';
import { withStyles, Typography, Grid } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import SkillCard from './SkillCard';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
  const [onStars, setOnStars] = useState(false);

  const handleChangeOnSort = () => {
    setOnSort(!onSort);
    (onSort) ? setSkillsContent(skills) : sortSkillsByName();
  }

  const sortSkillsByName = () => {
    const result = skillsContent.concat().sort((a, b) => (a.skill < b.skill) ? -1 : 1)
    setSkillsContent(result);
    setOnStars(false);
  }

  const handleChangeOnStars = () => {
    setOnStars(!onStars);
    (onStars) ? setSkillsContent(skills) : sortSkillsByStars();
  }

  const sortSkillsByStars = () => {
    const result = skillsContent.concat().sort((a, b) => (a.rating > b.rating) ? -1 : 1);
    setSkillsContent(result);
    setOnSort(false);
  }

  return (
    <div className={classes.root}>
      <Grid container xs={12} alignItems="center" direction="column">
        <Grid item>
          <Typography variant="h4">
            Technical Skills
          </Typography>
        </Grid>
        <Grid item>
          <FormGroup row>
            <FormControlLabel control={<Switch checked={onSort} onChange={handleChangeOnSort} />}
              label="Sort By Skill Name">
            </FormControlLabel>
            <FormControlLabel control={<Switch checked={onStars} onChange={handleChangeOnStars} />}
              label="Sort By Star Rating">
            </FormControlLabel>
          </FormGroup>
        </Grid>
        <Grid item>
          <Grid container className={classes.grid} spacing={1}>
            {
              skillsContent.map((skill, key) => <SkillCard skill={skill} key={key} />)
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
})

export default TechnicalSkills;