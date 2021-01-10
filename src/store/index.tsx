import { createStore } from 'redux'; //funçao principal
import rootReducers from './modules/rootReducers';
import { IcartState } from './modules/cart/types';

export interface IState {
    cart: IcartState;
}

const store = createStore(rootReducers);

export default store;
