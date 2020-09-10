import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('Should Setup Remove Expense Action Object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
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
    const expenseData = {
        description: 'Rent',
        amount: 1225,
        createdAt:1000,
        note: 'Last Month Rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense :{
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should Setup Add Expense Action Object with default values',() => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note:'',
            amount:0,
            createdAt:0
        }
    })
})