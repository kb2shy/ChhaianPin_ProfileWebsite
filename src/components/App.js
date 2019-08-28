import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Container from '@material-ui/core/Container';

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
  modal: {
    border: '3px solid #000'
  },
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
  },
  image: {
    width: '100%'
  }
})

const App = withStyles(styles)(({ classes }) => {
  
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');

  const openImage = (image) => {
    setOpen(true);
    setImage(image);
  }

  const closeImage = () => {
    setOpen(false);
    setImage('');
  }
    
  return (
    <div className={classes.root}>
      <TopMenu />
      <Modal open={open} onClose={closeImage} className={classes.modal}>
        <Container className={classes.container}>
          <img src={image} className={classes.image} alt={image}></img>
        </Container>
      </Modal>
      <Home />
      <Education />
      <TechnicalSkills />
      <Portfolio openImage={openImage}/>
      <ContactMe />
    </div>
  ) 
})

export default App;
{/* <div className={classes.toolbarMargin}></div> */}