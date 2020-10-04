import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startEditExpense, startRemoveExpense} from '../actions/expenses'
import ExpenseRemoveModal from './ExpenseRemoveModal'

export class EditExpensePage extends React.Component {
    state = {
        promptRemove: undefined
    }
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.setState(() => ({promptRemove:true}))
    }
    onRemoveConfirm = () => {
        this.props.startRemoveExpense({id:this.props.expense.id})
        this.props.history.push('/')
    }
    handleClearPromptRemoveExpense = () => {
        this.setState({promptRemove:undefined})
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
                </div>
                <div>
                    <ExpenseRemoveModal
                        promptRemove={this.state.promptRemove}
                        handleClearPromptRemoveExpense={this.handleClearPromptRemoveExpense}
                        onRemoveConfirm={this.onRemoveConfirm}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

//Function for testing purposes
const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

// const EditExpensePage = (props) => {
//     return (
//     <div>
//         <ExpenseForm 
//             expense={props.expense}
//             onSubmit={(expense) => {
//                 props.dispatch(editExpense(props.expense.id, expense))
//                 props.history.push('/')
//             }}
//         />
//         <button onClick={(expense) => {
//             props.dispatch(removeExpense({ id: props.expense.id }))
//             props.history.push('/')
//         }}>Remove</button>
//     </div>
// )}

