import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SkillCard from './SkillCard';
import skills from '../content/skills';
import { Paper } from '@material-ui/core';
import TechnicalSkills from './TechnicalSkills';

const styles = theme => ({
  root: {
    height: '100%'
  },
  typography: {
    background: 'primary',
    padding: 0,
    margin: 0,
    color: 'secondary'
  },
  image: {
    width: '100%'
  }
})

const Home = withStyles(styles)(({ classes }) => {
  return (
    <div className={classes.root}>
      
      <Typography
        variant="h4"
        align="center"
        className={classes.typography}
      >
        Welcome
      </Typography>
      <Typography
        variant="body1"
        align="center"
      >
        Hi! My name is Chhaian and it's pronounced like Cheyenne, like the city in <a href="https://www.google.com/maps/place/Cheyenne,+WY/@41.1477062,-104.9074876,11z/data=!3m1!4b1!4m5!3m4!1s0x876f38762e73ef93:0xb10a30418f972d2b!8m2!3d41.1399814!4d-104.8202462" target="_blank">Cheyenne, Wyoming</a> and like the the Native American Tribe. Software Engineer with experience designing and developing responsive web applications, content, and features. Proficient in JavaScript, Node.js, React.js, web technologies, and RESTful APIs. Enthusiastic self-starter with a passion for building quality products, delivering well-tested features, and learning new technologies to improve user experiences.
      </Typography>
      <Paper>
        <TechnicalSkills />
      </Paper>
      
    </div>
  )
})

export default Home;