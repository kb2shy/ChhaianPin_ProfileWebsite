import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class NavigationBar extends Component {

  render() {
    const { page, menuItems } = this.props;
    return(
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' aria-label='menu' onClick={() => console.log("menu item button clicked")}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            {page}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default NavigationBar;
