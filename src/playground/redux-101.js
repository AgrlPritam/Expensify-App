import { createStore} from 'redux'

const store = createStore((state = { count:0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy==='number' ? action.incrementBy : 1;
            return {
                count : state.count + incrementBy
            }   
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count : state.count - decrementBy
            }   
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }
})

//function in store.subscribe gets called everytime the store changes. 
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type: 'INCREMENT',      //type is a required field in dispatch 
    incrementBy: 5
})

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
})

store.dispatch({
    type: 'INCREMENT',
})

//unsubscribe()   //This unsubscribe from running the function inside store.subscribe

store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'DECREMENT'
})

store.dispatch({
    type: 'SET',
    count: 101
})