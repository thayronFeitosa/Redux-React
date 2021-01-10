import { Reducer } from 'redux';
import { IcartState } from './types';
import produce from 'immer';

const INITIAL_STATE: IcartState = {
    items: []
};

export const cart: Reducer<IcartState> = (state = INITIAL_STATE, action) =>{
    return produce(state, draft => {
        switch(action.type){
            case 'ADD_PRODUCT_TO_CART': {
                const { product } = action.payload;

                draft.items.push({
                    product,
                    quantity: 1,
                });
                
                break;      
            }
            default: {
                return draft;
            }
        }
    });
}

export const loja: Reducer<IcartState> = () =>{
    return INITIAL_STATE;
}



