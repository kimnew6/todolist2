import { createStore } from 'redux';
import { rootReducer } from '.';

const store = createStore(rootReducer);

export { store };
