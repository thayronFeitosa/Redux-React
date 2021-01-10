import { Reducer } from 'redux';
import { IcartState } from './types';

const INITIAL_STATE: IcartState = {
    items: []
};

export const cart: Reducer<IcartState> = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'ADD_PRODUCT_TO_CART': {
            const { product } = action.payload;
            return { 
             ...state,
             items:[
                 ...state.items,
                 {
                    product,
                    quantity: 1
                 }
             ]
            };
            
        }
        default: {
            return state;
        }
    }
}

export const loja: Reducer<IcartState> = () =>{
    return INITIAL_STATE;
}



