import {ExpensesSummary} from '../../components/ExpensesSummary'
import React from 'react'
import {shallow} from 'enzyme'

test('Should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={2365455115} />)
    expect(wrapper).toMatchSnapshot()  
})