import { Reducer } from 'redux';
import { IcartState } from './types';

const INITIAL_STATE: IcartState = {
    items: []
};

const cart: Reducer<IcartState> = () =>{
    return INITIAL_STATE;
}

export default cart;