import { useEffect, useState } from 'react';
import { Iproduct } from '../store/modules/cart/types';
import CatalogItem from './CatalogItem';
import api from '../services/api';

const Catalog: React.FC = () => {
    const [catalog, setCatalog] = useState<Iproduct[]>([])
    useEffect(() => {
        api.get('products').then(response => {
            setCatalog(response.data);
        });
    }, []);
    
    return (
        <main>
            <h1>Catalog</h1>
            {catalog.map((product) => (
                <CatalogItem key={product.id} product={product} />
            ))};
        </main>
    );
};

export default Catalog;
