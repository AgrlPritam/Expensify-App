import { createStore} from 'redux'

//Action Generators -> functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({       //Array Destructuring
        type: 'INCREMENT',
        incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const store = createStore((state = { count:0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy==='number' ? action.incrementBy : 1;
            return {
                count : state.count + action.incrementBy
            }   
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count : state.count - action.decrementBy
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

store.dispatch(incrementCount())

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy:10}))

store.dispatch(resetCount())

store.dispatch(setCount({ count:101 }))

// store.dispatch({
//     type: 'INCREMENT',      //type is a required field in dispatch 
//     incrementBy: 5
// })

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// })

// store.dispatch({
//     type: 'INCREMENT',
// })

//unsubscribe()   //This unsubscribe from running the function inside store.subscribe

// store.dispatch({
//     type: 'RESET'
// })

// store.dispatch({
//     type: 'DECREMENT'
// })

// store.dispatch({
//     type: 'SET',
//     count: 101
// })