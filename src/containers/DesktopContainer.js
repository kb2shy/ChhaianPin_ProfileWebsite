import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

const DesktopContainer = () => {
  return (
    <Container>
      {this.props.children}
    </Container>
  )
}

export default DesktopContainer;
