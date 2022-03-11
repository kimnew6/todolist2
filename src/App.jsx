import React, { Component } from 'react';

import AppBar from './components/Appbar';
import { withStyles } from '@mui/styles';
import Todolist from './components/Todolist';

const Styles = {
  root: {
    // height: '100%',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
};
class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar />
        <Todolist />
      </div>
    );
  }
}

export default withStyles(Styles)(App);
