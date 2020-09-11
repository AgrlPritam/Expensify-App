import expensesReducer from '../../reducers/expenses'
import {expenses} from '../fixtures/expenses'
import moment from 'moment'

test('Should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('Should remove expense by id',() => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('Should not remove expense if id not found',() => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Should add an expense',() => {
    const expense = {
        id: '4',
        description: 'Gas',
        note: '',
        amount: 780,
        createdAt: moment(0).add(10, 'days').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses,expense])
})

test('Should Edit an existing expense',() => {
    const amount = 2400
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount)
})

test('Should not Edit an expense if no id found',() => {
    const amount = 2400
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})