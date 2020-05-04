import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import * as actions from '../actions/expenses';

export const EditExpensePage = (props) => {

  return (
    <div>
      <ExpenseForm  onSubmit={(expense) => {
                        
                        
                        props.onEditExpense(expense, props.expense.id);
                        props.history.push('/')
                    }}
                    expense={props.expense}/>
      <button onClick={() => {
  
                        props.onDeleteExpense(props.expense.id); 
                        props.history.push('/')
                      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {

  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onEditExpense: (expense, id) => dispatch(actions.startEditExpense(id, expense)),
    onDeleteExpense: (id) => dispatch(actions.startRemoveExpense({id}))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);


