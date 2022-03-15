import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';

const Styles: any = {
  Appbar: {
    position: 'fixed',
    top: 0,
  },
};

interface State {
  classes?: any;
}
class Appbar extends Component<State> {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.Appbar}>
        <Toolbar>
          <Typography>LuluZoe's To Do</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(Styles)(Appbar);
