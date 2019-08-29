import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
  mainImage: {
    margin: 0,
    padding: 0,
    width: '100%'
  },
  image: {
    maxHeight: 100
  },
  gridItem: {
    paddingTop: 10,
  }
})

const Home = withStyles(styles)(({ classes }) => {
  return (
    <div className={classes.root} id="home">
      <Grid container>
        <Grid item xs={12}>
          <img src="./img/banner2.jpg" className={classes.mainImage} alt="keyboard"></img>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
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
              Hello! Welcome to my webpage. My name is Chhaian and it's pronounced 'Cheyenne', like the city in <a href="https://www.google.com/maps/place/Cheyenne,+WY/@41.1477062,-104.9074876,11z/data=!3m1!4b1!4m5!3m4!1s0x876f38762e73ef93:0xb10a30418f972d2b!8m2!3d41.1399814!4d-104.8202462" target="_blank" rel="noopener noreferrer">Cheyenne, Wyoming</a> and like the <a href="https://en.wikipedia.org/wiki/Cheyenne" target="_blank" rel="noopener noreferrer">Native American Tribe</a>. I am neither from Cheyenne, Wyoming nor am I a Native American.
              <br />
              <br />
              <strong>I am a Full Stack Web Developer and Software Engineer and I am seeking Front-End, Back-End, or Full Stack Web Development opportunities in the Greater Seattle Area. I am also open to opportunities in either the San Francisco Bay Area or San Diego, California.</strong>
              <br />
              <br />
              I have experience designing and developing responsive web applications, content, and features. I am proficient in JavaScript, Node.js, React.js, web technologies, and RESTful APIs. I am always looking to improve my skills as a web developer, learn new programming languages, and test out new technologies.
            </Typography>
            <br />
            <Typography variant="h4" align="center" gutterBottom>
              Back Story
            </Typography>
            <Typography variant="body1" align="center">
              I used to work as a court clerk for <a href="https://www.seattle.gov/courts" target="_blank" rel="noopener noreferrer">Seattle Municipal Court</a> before I discovered my passion for software engineering and technology. Public service has been an invaluable experience where I have met many great co-workers, judges, attorneys, police officers, and other public officials. After working at the courthouse for 14 years, I realized that I couldn't grow professionally nor financially and that I needed to change careers. 
              <br/>
              <br />
              For the last few years, I explored different career paths and opportunities. I found that I had a stronger interest and desire to work in technology and software programming than I did in law and criminal justice. Not only did technology and software engineering provide better opportunities for personal and financial growth, but it also presented an opportunity to learn new skill sets, tackle different challenges, and work on projects that will impact many people. Earlier this year, I made the decision to pursue my desire to work as a software engineer. I quit my job, completed an intensive coding boot camp program, and focused my time and energy learning programming and engineering. 
              <br />
              <br />Now, I am looking for a software engineering opportunity to apply my new technical skill sets.
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
})

export default Home;