import React from 'react'
import Modal from 'react-modal'

const ExpenseRemoveModal = (props) => (
    <Modal
        isOpen = {!!props.promptRemove}
        onRequestClose={handleClearPromptRemoveExpense}
        contentLabel="Are you sure you want to remove this expense?"
        closeTimeoutMS={200}
        className="modal"
        appElement="app"
    >
        <h3 className="modal__title">Are you sure you want to remove this expense?</h3>
        <div className="input-group modal-input">
            <button className="button button--delete input-group__item">Remove</button>
            <button className="button button--secondary input-group__item" onClick={props.handleClearPromptRemoveExpense}>Cancel</button>
        </div>
    </Modal>
)

export {ExpenseRemoveModal as default}