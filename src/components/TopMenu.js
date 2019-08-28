import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import Home from './Home';
import Education from './Education';
import TechnicalSkills from './TechnicalSkills';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar
});

const TopMenu = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          className={classes.flex}
        >
          Chhaian's Website
        </Typography>
        <Tabs aria-label="menu tabs">
          <Tab label="Home" />
          <Tab label="Education" />
          <Tab label="Technical Skills" />
          <Tab label="Portfolio" />
          <Tab label="Contact Me" />
        </Tabs>
      </Toolbar>
    </AppBar>
  </div>
))

export default TopMenu;

{/* <Router>
<Route exact path="/" component={Home} />
<Route exact path="/education" component={Education} />
<Route exact path="/technicalskills" component={TechnicalSkills} />
</Router> */}