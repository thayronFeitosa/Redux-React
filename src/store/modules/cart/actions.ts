import { Iproduct } from './types';

export function addProductToCart(product: Iproduct){
    return{
        type: 'ADD_PRODUCT_TO_CART',
        payload:{
            product,
        }
    };
} ;