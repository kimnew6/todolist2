import { createStore, applyMiddleware } from 'redux';
import { rootReducer, rootSaga } from '../modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware({});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export { store, sagaMiddleware };
