import { useStore } from 'react-redux';

const Catalog: React.FC = () => {
    const store = useStore();
    console.log(store.getState());
    
    return (
        <h1>Catalog</h1>
    );
};

export default Catalog;
