import { useSelector } from 'react-redux';

const Catalog: React.FC = () => {
    const store = useSelector(state => state);
    console.log(store);
    
    return (
        <h1>Catalog</h1>
    );
};

export default Catalog;
