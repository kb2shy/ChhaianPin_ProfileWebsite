import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30
  },
  box: {
    marginRight: 10
  },
  img: {
    width: '100%'
  }
})

const Education = withStyles(styles)(({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center">
        Education
      </Typography>
      <Grid container direction="row" justify="center" spacing={1}>
        <Grid item xs={12} sm={6}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <a href="https://flatironschool.com/" target="_blank"  rel="noopener noreferrer" >
              <img src="/img/flatironschool.jpg" alt="flatiron school logo" className={classes.img}/>
              </a>
            </Grid>
            <br />
            <Grid item>
              <Typography variant="body1" align="center">
                Location: <a href="https://www.google.com/maps/place/1411+4th+Ave,+Seattle,+WA+98101/@47.6092823,-122.3385627,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab38338e227:0x96ab350fef4c3d47!8m2!3d47.6092787!4d-122.336374" target="_blank" rel="noopener noreferrer">Seattle, Washington</a>
                <br />
                Degree: Certificate in Full Stack Web Development
              </Typography>

              <Typography variant="body2" align="center">
                Graduated: May, 2019
              </Typography>
              <br />
              <Typography variant="subtitle2" align="center">
                <h6>Areas of Study:</h6>
                <List>
                  <ListItem>Web Development in Ruby/Ruby on Rails, JavaScript, and React</ListItem>
                  <ListItem>RESTful API testing and development</ListItem>
                  <ListItem>Wireframing, documenting, developing, and deploying web content and features.</ListItem>
                </List>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <a href="https://www.washington.edu/" target="_blank" rel="noopener noreferrer">
                <img src="/img/uw2.png" alt="university of washington logo" />
              </a>
            </Grid>
            <br />
            <Grid item>
              <Typography variant="body1" align="center">
                Location: <a href="https://www.google.com/maps/place/1411+4th+Ave,+Seattle,+WA+98101/@47.6092823,-122.3385627,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab38338e227:0x96ab350fef4c3d47!8m2!3d47.6092787!4d-122.336374" target="_blank" rel="noopener noreferrer">Seattle, Washington</a>
                <br />
                Degree: Bachelor of Arts in Law, Society, and Justice
              </Typography>

              <Typography variant="body2" align="center">
                Graduated: December, 2004
              </Typography>
              <br />
              <Typography variant="subtitle2" align="center">
                <h6>Areas of Study:</h6>
                <List>
                  <ListItem>Comparison and analysis of Criminal Justice Systems in the world</ListItem>
                  <ListItem>Social, political, and historical study of Human Rights movements</ListItem>
                </List>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
})

export default Education;

