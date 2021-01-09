import { useEffect, useState } from 'react';
import {Iproduct} from '../store/modules/cart/types';
import api from '../services/api';

const Catalog: React.FC = () => {
    const [catalog, setCatalog] = useState<Iproduct[]>([])
    useEffect(() =>{
        api.get('products').then(response =>{
            setCatalog(response.data);
        })
    }, [])
    return (
        <main>
            <h1>Catalog</h1>

            {catalog.map(product =>(
                <article key={product.id}>
                    <strong>{product.title}</strong> {" - "}
                    <span>{product.price}</span>{" "}
                    <button type="button">Comprar</button>
                </article>
            ))}
        </main>
    );
};

export default Catalog;
