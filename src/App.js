import React, { Component } from 'react';
import { withStyles } from '@mui/styles';

const Styles = {
  root: {
    textAlign: 'center',
    fontSize: '50px',
    color: 'pink',
  },
};
class App extends React.Component {
  render() {
    const { classes } = this.props;
    return <header className={classes.root}>LuluZoe's Todolist</header>;
  }
}

export default withStyles(Styles)(App);
