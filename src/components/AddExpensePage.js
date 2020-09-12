import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {addExpense} from '../actions/expenses'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense)                 
        this.props.history.push('/')      //This is taken from react components from browser from addExpense--> history-->push function
    }
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

//This function is added for making test cases easy
const mapDispatchToProps = (dispatch) => ({         //check react-redux docs
    addExpense: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

// const AddExpensePage = (props) => (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm 
//             onSubmit={(expense) => {
//                 //props.dispatch(addExpense(expense))
//                 props.onSubmit(expense)                 //Added for making testing easy
//                 props.history.push('/')    
//             }}
//         />
//     </div>
// )

