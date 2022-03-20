import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routes';
import { Provider } from 'react-redux';
import { store } from './modules/store';

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
);
