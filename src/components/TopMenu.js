import React, { useState } from 'react';
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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
  toolbarMargin: theme.mixins.toolbar,
  appbar: {
    opacity: .75,
    color: 'white',
    backgroundColor: 'black'
  }
});

const TopMenu = withStyles(styles)(({ classes, width }) => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
  
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
            <Tab label="Home" key={0} />
          </Link>
          
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Tab label="Education" key={1}/>
          </Link>
          
          <Link
            activeClass="active"
            to="technical"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Tab label="Technical Skills" key={2}/>
          </Link>
          
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Tab label="Portfolio" key={3}/>
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Tab label="Contact Me" key={4}/>
          </Link>
        </Tabs>
      )
    }
    if (isWidthUp('xs', width)) {
      return (
        <div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            variant="selectedMenu"
          >
            <MenuItem>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                Education
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="technical"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                Technical Skills
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                Portfolio
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                Contact Me
              </Link>
            </MenuItem>
          </Menu>
        </div>
      )
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
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