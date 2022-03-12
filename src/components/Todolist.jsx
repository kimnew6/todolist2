import React, { Component } from 'react';
import Regbutton from './Regbutton';
import Reglist from './Reglist';

import { withStyles } from '@mui/styles';

const Styles = {
  container: {
    height: '100vh',
    position: 'relative',
    top: '100px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
};

class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <main className={classes.container}>
        <div>Todolist</div>
        <div onClick={this.handleOpen}>
          <Regbutton />
        </div>
        {open && <Reglist handleClose={this.handleClose} />}
      </main>
    );
  }
}

export default withStyles(Styles)(Todolist);
