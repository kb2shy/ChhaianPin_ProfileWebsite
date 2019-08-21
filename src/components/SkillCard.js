import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Rating from '@material-ui/lab/Rating';

const styles = theme => ({
  root: {
    display: 'inline'
  },
  card: {
    minWidth: 100,
  },
  img: {
    maxWidth: 25,
  }
})

const SkillCard = withStyles(styles)(({ classes, skill }) => {
  return (
    <Card className={classes.root}>
      <CardContent>
        <img src={`icons/${skill.icon}`}></img>
        <Typography variant="h6">
          {skill.skill}
        </Typography>
        <Rating value={skill.rating} readOnly/>
      </CardContent>
    </Card>
  )
})

export default SkillCard;