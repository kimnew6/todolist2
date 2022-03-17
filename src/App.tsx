import React from 'react';

import AppBar from './components/Appbar';
import Todolist from './components/Todolist';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <Todolist />
      </div>
    );
  }
}

export default App;
