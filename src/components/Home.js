import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SkillCard from './SkillCard';
import skills from '../content/skills';

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
      <img src="/img/banner2.jpg" className={classes.image}></img>
      <Typography
        variant="h4"
        align="center"
        className={classes.typography}
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        align="center"
      >
        Software Engineer with experience designing and developing responsive web applications, content, and features. Proficient in JavaScript, Node.js, React.js, web technologies, and RESTful APIs. Enthusiastic self-starter with a passion for building quality products, delivering well-tested features, and learning new technologies to improve user experiences.
      </Typography>
      <Typography
        variant="h4"
        align="center"
      >
        Technical Skills
      </Typography>
      {
        skills.map((skill, key) => <SkillCard skill={skill} key={key} />)
      }

    </div>
  )
})

export default Home;