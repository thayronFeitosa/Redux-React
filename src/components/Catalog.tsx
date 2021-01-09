import { useStore } from 'react-redux';

const Catalog: React.FC = () => {
    const store = useStore();
    const { id, name, email } = store.getState();

    return (
        <>
        <h1>Olá { name } seus dados seguem a baixo</h1>
        <ul>
            <li>Id: {id} </li>  
            <li>Nome: { name }</li>
            <li>Email: { email }</li>
        </ul>
        </>
        
    
    );
};

export default Catalog;
