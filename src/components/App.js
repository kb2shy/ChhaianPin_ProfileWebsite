import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import TopMenu from './TopMenu';
import Home from './Home';
import Education from './Education';
import TechnicalSkills from './TechnicalSkills';
import Portfolio from './Portfolio';

// const PAGES = ["HOME", "ABOUT ME", "RÉSUMÉ", "PROJECTS", "CONTACT ME"];

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1
  },
  toolbarMargin: theme.mixins.toolbar,

})

const App = withStyles(styles)(({ classes}) => {
    
  return (
    <div className={classes.root}>
      <TopMenu />
      <div className={classes.toolbarMargin}></div>
      <Home />
      <Education />
      <TechnicalSkills />
      <Portfolio />
    </div>
  ) 
})

export default App;
