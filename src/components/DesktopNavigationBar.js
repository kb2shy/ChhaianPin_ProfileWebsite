import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class DesktopNavigationBar extends Component {

  render() {
    const { page, pages, handlePageChange } = this.props;
    return(
      <AppBar position='static'>
        <Tabs
          value={page}
          onChange={handlePageChange}
          indicatorColor='primary'
          textColor='primary'
          centered
          >
          {pages.map((page, key) =>
            <Tab key={key} label={page} />
          )}
        </Tabs>

      </AppBar>
    )
  }
}

export default DesktopNavigationBar;
