import { createStore } from 'redux'; //funçao principal

const store = createStore(() => {
    return { 
        id: 3,
        name: 'Thayron',
        email: 'thayron@gmail.com'
    }
});

export default store;
