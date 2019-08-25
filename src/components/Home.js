import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = theme => ({
  root: {
    height: '100%',
  },
  container: {
    marginLeft: 30,
    marginRight: 30,
  },
  typography: {
    background: 'primary',
    padding: 0,
    margin: 0,
    color: 'secondary'
  },
  mainImage: {
    margin: 0,
    padding: 0,
    width: '100%'
  },
  image: {
    maxHeight: 100
  },

})

const Home = withStyles(styles)(({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <img src="./img/banner2.jpg" className={classes.mainImage} alt="keyboard"></img>
        </Grid>
        <Grid item xs={12}>

        </Grid>
      </Grid>
      <Container>
        <Typography
          variant="h4"
          align="center"
          className={classes.typography}
          gutterBottom
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
        <Typography variant="h4" align="center" gutterBottom>
          Back Story
      </Typography>
        <Typography variant="body1" align="center">
          I used to be a Court Clerk for <a href="https://www.seattle.gov/courts" target="_blank" rel="noopener noreferrer">Seattle Municipal Court</a> before I discovered my passion for software engineering and technology. Public service has been an invaluable experience where I have met many great co-workers, judges, attorneys, police officers, and other public officials. For the last couple of years, I was learning programming and software engineering on my own. I didn't know if I was learning the right information or whether I would ever be good enough to pursue it as a profession. My desire to pursue a profession in software engineering and technology over threw my feelings of imposter syndrom and fear of missing out. Earlier this year, I quit my job, went to coding boot camp, and now I am looking for an opportunity to apply my new technical skill sets.
      </Typography>
        <br />
      </Container>      
    </div>
  )
})

export default Home;