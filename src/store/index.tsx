import { createStore } from 'redux'; //funçao principal
import rootReducers from './modules/rootReducers';
const store = createStore(rootReducers);

export default store;
