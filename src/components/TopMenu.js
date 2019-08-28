import React from 'react';
import { Link } from 'react-scroll';

import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// import Home from './Home';
// import Education from './Education';
// import TechnicalSkills from './TechnicalSkills';
// import ContactMe from './ContactMe';

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

const TopMenu = withStyles(styles)(({ classes, width, getRef }) => {
  
  const menu = () => {
    if (isWidthUp('sm', width)) {
      return (
        <Tabs aria-label="menu tabs">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Tab label="Home"/>
          </Link>
          
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Tab label="Education"/>
          </Link>
          
          <Link
            activeClass="active"
            to="technical"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Tab label="Technical Skills"/>
          </Link>
          
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Tab label="Portfolio"/>
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Tab label="Contact Me"/>
          </Link>
        </Tabs>
      )
    }
    if (isWidthUp('xs', width)) {
      return (
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      )
    }
  }

  return (
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
          {menu()}
        </Toolbar>
      </AppBar>
    </div>
  )
})

export default withWidth()(TopMenu);