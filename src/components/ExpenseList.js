import { connect } from 'react-redux';
import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
    return (
        <ul>
            {props.expenses.map(expense => {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })}
        </ul>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}


export default connect(mapStateToProps)(ExpenseList)