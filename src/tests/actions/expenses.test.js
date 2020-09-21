import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense,
     addExpense, 
     editExpense, 
     removeExpense, 
     startRemoveExpense, 
     setExpenses, 
     startSetExpenses } from '../../actions/expenses'
import {expenses} from '../fixtures/expenses'
import database from '../../firebase/firebase'
import regeneratorRuntime from "regenerator-runtime";

const createMockStore = configureMockStore([thunk])

beforeEach( async () => {
    const expensesData = {}
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description,note, amount, createdAt}
    })
    await database.ref('expenses').set(expensesData)
})

test('Should Setup Remove Expense Action Object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should remove expense from firebase', (done) => {
    const store = createMockStore({})
    const id = expenses[2].id
    const snapshot = store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
    })
})

test('Should Setup Edit expense Action Object',() => {
    const action = editExpense('123abc', {note: 'New Note'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New Note'
        }
    })
})

test('Should Setup Add Expense Action Object with provided values',() => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : expenses[2]
    })
})

test('Should add expense to database and store', async () => {
    const store = createMockStore({})
    const expenseData = {
        description: 'TV',
        amount: 11000,
        note: 'Good',
        createdAt: 1000
    }           //Below dispatch will wait for data to be dispatched into database from expense action "return database...."
    await store.dispatch(startAddExpense(expenseData))
    const actions = store.getActions()
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            id: expect.any(String),
            ...expenseData
        }
    })
    const snapshot = await database.ref(`expenses/${actions[0].expense.id}`).once('value')
        expect(snapshot.val()).toEqual(expenseData)
})

test('Should add expense with defaults to database and store',async () => {
    const store = createMockStore({})
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }           
    await store.dispatch(startAddExpense({}))
    const actions = store.getActions()
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            id: expect.any(String),
            ...expenseDefault
        }
    })
    const snapshot = await database.ref(`expenses/${actions[0].expense.id}`).once('value')
        expect(snapshot.val()).toEqual(expenseDefault)
})    

test('Should setup set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('Should fetch the expenses from firebase',async () => {
    const store = createMockStore({})
    await store.dispatch(startSetExpenses())
    const actions = store.getActions()
    expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})
// test('Should Setup Add Expense Action Object with default values',() => {
//     const action = startAddExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note:'',
//             amount:0,
//             createdAt:0
//         }
//     })
// })