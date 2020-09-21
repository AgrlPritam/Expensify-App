import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'
//import '../public/styles.css'
 import {startSetExpenses} from './actions/expenses'
// import {setTextFilter} from './actions/filters'
// import {getVisibleExpenses} from './selectors/expenses'

const store = configureStore();

// store.dispatch(addExpense({description: 'Water Bill', amount:400 }))
// store.dispatch(addExpense({description: 'Gas Bill', createdAt:15522}))
// store.dispatch(addExpense({description: 'Rent', amount:3000, createdAt: 12255}))
// store.dispatch(setTextFilter('water'))

// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
// console.log(visibleExpenses);

// console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(<p>Loading...</p>,document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx,document.getElementById('app'))
})