import React, { Component } from 'react';

import DesktopNavigationBar from './DesktopNavigationBar';
import MobileNavigationBar from './MobileNavigationBar';

const PAGES = ["HOME", "ABOUT ME", "RÉSUMÉ", "PROJECTS", "CONTACT ME"]

class App extends Component {
  state = {
    width: window.innerWidth,
    page: '',
  }

  handlePageChange = (page) => {
    this.setState({ page });
  }

  render() {
    const { page } = this.state;

    return(
      <div>
        {this.state.width < 400 ?
          <MobileNavigationBar pages={PAGES}/> :
          <DesktopNavigationBar page={page} pages={PAGES}/>
        }
      </div>
    )
  }
}

export default App;
