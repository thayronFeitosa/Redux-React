import React, {useCallback} from 'react';
import { Iproduct } from '../store/modules/cart/types';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/cart/actions';

interface CatalogItemProps{
    product: Iproduct;

}

const CalalogItem: React.FC <CatalogItemProps> =({ product }) => {
    const dispatch = useDispatch();
    const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCart(product))
    }, [dispatch, product]);

    return (
    <article>
        <strong>{product.title}</strong> {" - "}
        <span>{product.price}</span>{" "}
        <button
            type="button"
            onClick={handleAddProductToCart}
        >
            Comprar
        </button>
    </article>
    );
};

export default CalalogItem;
