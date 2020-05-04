import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';
import selectExpesnes from '../selectors/expenses';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    
    const expenseWord = expensesCount === 0 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return ( 
        <div>
            <h2>Viewing {expensesCount} {expenseWord} tottaling {formattedExpensesTotal}</h2>
        </div>
    )
};

const mapStateToProps = state => {
    const visibleExpenses = selectExpesnes(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    }
};


export default connect(mapStateToProps)(ExpensesSummary);