import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('Should Setup Remove Expense Action Object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toBe({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})