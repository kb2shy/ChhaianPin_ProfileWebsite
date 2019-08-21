import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const styles = theme => ({
  card: {
    minWidth: 100,
  }
})

const SkillCard = withStyles(styles)(({ classes, skill }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {skill.skill}
        </Typography>
        <Rating value={skill.rating} readOnly/>
      </CardContent>
    </Card>
  )
})

export default SkillCard;