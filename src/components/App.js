import React, { Component } from 'react';

import DesktopNavigationBar from './DesktopNavigationBar';
import MobileNavigationBar from './MobileNavigationBar';

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
      <div>
        {this.state.width < 400 ?
          <MobileNavigationBar
            page={page}
            pages={PAGES}
            handlePageChange={this.handlePageChange}
          /> :
          <DesktopNavigationBar
            page={page}
            pages={PAGES}
            handlePageChange={this.handlePageChange}
          />
        }
      </div>
    )
  }
}

export default App;
