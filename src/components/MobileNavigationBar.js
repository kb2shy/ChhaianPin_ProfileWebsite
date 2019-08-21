import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class MobileNavigationBar extends Component {
  state = {
    open: false,
  }

  handleToggleMenu = () => {
    this.setState({ open: !this.state.open })
  }

  handleSelect = (page) => {
    this.props.handlePageChange(page);
    this.handleToggleMenu();
  }

  render() {
    const { page, pages } = this.props;
    return(
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            aria-label='menu'
            onClick={() => this.handleToggleMenu()}
          >
            <MenuIcon />
            <Menu
              anchorEl={page}
              open={this.state.open}
              onClose={() => this.handleToggleMenu()}
              keepMounted
            >
              {pages.map((p, k) =>
                <MenuItem key={k} onClick={() => this.handleSelect}>{p}</MenuItem>)
              }
            </Menu>
          </IconButton>
          <Typography variant="h6" >
            {page}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default MobileNavigationBar;
