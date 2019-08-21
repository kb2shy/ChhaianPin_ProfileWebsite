import React, { Component } from 'react';

// import DesktopNavigationBar from './DesktopNavigationBar';
// import MobileNavigationBar from './MobileNavigationBar';

import TopMenu from './TopMenu';

const PAGES = ["HOME", "ABOUT ME", "RÉSUMÉ", "PROJECTS", "CONTACT ME"]

class App extends Component {
  state = {
    width: window.innerWidth,
    page: 'HOME',
  }

  handlePageChange = (page) => {
    console.log("handlePageChange triggered")
    this.setState({ ...this.state, page });
  }

  render() {
    const { page } = this.state;

    return(
      <TopMenu />
    )
  }
}

export default App;
