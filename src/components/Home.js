import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    height: '100%',
  },
  typography: {
    background: 'primary',
    padding: 0,
    margin: 0,
    color: 'secondary'
  },
  image: {
    maxWidth: 150
  },

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
        Hello! Welcome to my webpage. My name is Chhaian and it's pronounced 'Cheyenne', like the city in <a href="https://www.google.com/maps/place/Cheyenne,+WY/@41.1477062,-104.9074876,11z/data=!3m1!4b1!4m5!3m4!1s0x876f38762e73ef93:0xb10a30418f972d2b!8m2!3d41.1399814!4d-104.8202462" target="_blank" rel="noopener noreferrer">Cheyenne, Wyoming</a> and like the <a href="https://en.wikipedia.org/wiki/Cheyenne">Native American Tribe</a>. I am neither from Cheyenne, Wyoming nor am I a Native American.
        <br />
        <br />
        <strong>I am a Full Stack Web Developer and Software Engineer and I am available for hire.</strong>
        <br />
        <br />
        I have experience designing and developing responsive web applications, content, and features. I am proficient in JavaScript, Node.js, React.js, web technologies, and RESTful APIs. I am always looking to improve my skills as a web developer, learn new programming languages, and test out new technologies.
      </Typography>
      <br />
      <Typography variant="h4" align="center">
        Back Story
      </Typography>
      <Typography variant="body1" align="center">
        I used to work as a Court Clerk for <a href="https://www.seattle.gov/courts" target="_blank" rel="noopener noreferrer">Seattle Municipal Court</a>. I discovered my passion for software engineering and technology while I was exploring different career paths to improve my life goals. Public service has been an invaluable experience where I have met many great co-workers, judges, attorneys, police officers, and other public officials. However, after working in the court system for nearly 15 years and reaching the highest pay grade for my position, I realized that I needed to make the leap into technology. I quit my job, went to coding boot camp, and now am looking for an opportunity to apply my new technical skill sets.
      </Typography>
      <br />

      <Typography variant="h4" align="center">
        Education
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Typography variant="body1" align="center">
            <a href="https://flatironschool.com/" target="_blank" rel="noopener noreferrer" >
              <img src="/img/flatironschool.png" alt="flatiron school logo"/>
              <br />
              The Flatiron School
            </a>
            <br />
            Location: <a href="https://www.google.com/maps/place/1411+4th+Ave,+Seattle,+WA+98101/@47.6092823,-122.3385627,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab38338e227:0x96ab350fef4c3d47!8m2!3d47.6092787!4d-122.336374" target="_blank" rel="noopener noreferrer">Seattle, Washington</a>

          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Typography variant="body1" align="center">
            <a href="https://www.washington.edu/" target="_blank" rel="noopener noreferrer">
              <img src="/img/uw2.gif" alt="university of washington logo"/>
              <br />
              The University of Washington
            </a>
            <br />
            Location: <a href="https://www.google.com/maps/place/1411+4th+Ave,+Seattle,+WA+98101/@47.6092823,-122.3385627,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab38338e227:0x96ab350fef4c3d47!8m2!3d47.6092787!4d-122.336374" target="_blank" rel="noopener noreferrer">Seattle, Washington</a>
          </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
})

export default Home;