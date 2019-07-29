import React, { Component } from 'react';

import NavigationBar from './NavigationBar';

const PAGES = ["HOME", "ABOUT", "RÉSUMÉ", "PROJECTS", "CONTACT ME"]

class App extends Component {
  state = {
    page: 'HOME',
  }

  render() {
    return(
      <div>
        <NavigationBar page={this.state.page} menuItems={PAGES}/>
      </div>
    )
  }
}

export default App;
