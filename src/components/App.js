import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import TopMenu from './TopMenu';
import HomeContainer from '../containers/HomeContainer';

// const PAGES = ["HOME", "ABOUT ME", "RÉSUMÉ", "PROJECTS", "CONTACT ME"];

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  toolbarMargin: theme.mixins.toolbar
})

const App = withStyles(styles)(({ classes}) => {
    
  return (
    <div className={classes.root}>
      <TopMenu />
      <div className={classes.toolbarMargin} />
      <HomeContainer />
    </div>
  ) 
})

export default App;
