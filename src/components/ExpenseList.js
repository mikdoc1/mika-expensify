import { connect } from 'react-redux';
import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
    let list = (
        <ul>
            {props.expenses.map(expense => {
                return <ExpenseListItem key={expense.description} {...expense}/>
            })}
        </ul>
    )
    if(props.expenses.length === 0) {
        list = <p>No expenses</p>
    }
    
    return (
        <div>
            {list}
        </div>    
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};


export default connect(mapStateToProps)(ExpenseList)