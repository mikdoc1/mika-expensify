import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import * as actions from '../actions/expenses'

export const AddExpensePage = (props) => {

  return (
    <div>
    <h1>Add Expense</h1>
    <ExpenseForm onSubmit={(expense) => {
                            props.onStartAddExpense(expense); 
                            props.history.push('/')
                          }}/>            
  </div>
  )
};



const matDispatchToProps = dispatch => {
  return {
    onStartAddExpense: (expense) => dispatch(actions.startAddExpense(expense))
  }
}

export default connect(null, matDispatchToProps)(AddExpensePage);
