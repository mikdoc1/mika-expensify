import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import * as actions from '../actions/expenses'

export const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm onSubmit={(expense) => {
                            props.onAddExpense(expense); 
                            props.history.push('/')
                          }}/>            
  </div>
);

const matDispatchToProps = dispatch => {
  return {
    onAddExpense: (expense) => dispatch(actions.addExpense(expense))
  }
}

export default connect(null, matDispatchToProps)(AddExpensePage);
