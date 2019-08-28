import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import TopMenu from './TopMenu';
import Home from './Home';
import Education from './Education';
import TechnicalSkills from './TechnicalSkills';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';

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
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');
    
  return (
    <div className={classes.root}>
      <TopMenu />
      <div className={classes.toolbarMargin}></div>
      <Modal open={open}></Modal>
      <Home />
      <Education />
      <TechnicalSkills />
      <Portfolio />
      <ContactMe />
    </div>
  ) 
})

export default App;
