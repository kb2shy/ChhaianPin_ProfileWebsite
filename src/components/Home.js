import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  image: {
    width: '100%'
  }
})

const Home = withStyles(styles)(({ classes }) => {
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <img src="/img/banner1.jpg" className={classes.image}></img>
    </React.Fragment>
  )
})

export default Home;