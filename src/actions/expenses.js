import {v4 as uuidv4} from 'uuid'
import database from '../firebase/firebase'

//Add_Expense

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})
//Before use of firebase and redux-thunk
// export const addExpense = (
//     { 
//         description = '', 
//         note = '', 
//         amount = 0, 
//         createdAt = 0 
//     } = {}) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuidv4(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// })

//Below works only after add redux-thunk dependency as it returns a function
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt }
        return database.ref('expenses').push(expense).then((ref) => {       //return here is added for testing purpose using promise chaining
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

//Remove_Expense
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//Edit_Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})