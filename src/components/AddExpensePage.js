import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {addExpense} from '../actions/expenses'

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense))
                props.history.push('/')     //This is taken from react components from browser from addExpense--> history-->push function
            }}
        />
    </div>
)

export default connect()(AddExpensePage);