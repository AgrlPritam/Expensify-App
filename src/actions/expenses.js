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

//Below is added which actually changes the redux store
//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})


//Below is added for async action for fetching data from firebase
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses =[]
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
} 