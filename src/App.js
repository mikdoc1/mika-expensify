import React from 'react';
import AppRouter from './routers/AppRouter';
import './App.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import * as actionExpenses from './actions/expenses';
import * as actionCreators from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';



const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  //console.log(state)
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  
});

store.dispatch(actionExpenses.addExpense({ description: 'Water Bill', amount: 100, createdAt: 50000 }));
store.dispatch(actionExpenses.addExpense({ description: 'Gas Bill', amount: 300, createdAt: 20000 }));
store.dispatch(actionExpenses.addExpense({ description: 'Electricity Bill', amount: 600, createdAt: 40000 }));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

function App() {
  return (
    jsx
  );
}

export default App;
