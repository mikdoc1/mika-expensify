import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilter />
    <ExpenseList /> 
  </div>
);

export default ExpenseDashboardPage;