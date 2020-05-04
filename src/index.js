import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout, loginStart, logoutStart } from './actions/auth';
import AppRouter, { history } from './routers/AppRouter';
import './App.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const rednerApp = () => {
  if(!hasRendered) {
      ReactDOM.render(
        <React.StrictMode>
          {jsx}
        </React.StrictMode>,
        document.getElementById('root')
      );   
    hasRendered = true
    
  }  
};

ReactDOM.render(
  <React.StrictMode>
    <p>Loading...</p>
  </React.StrictMode>,
  document.getElementById('root')
);


firebase.auth().onAuthStateChanged(user => {
  if(user) {  
    console.log('login')
    store.dispatch(login(user.uid))
    
    store.dispatch(startSetExpenses()).then(() => {
      rednerApp()
      if(history.location.pathname === '/') history.push('/dashboard')
    });
  } else {
    console.log('logout');
    store.dispatch(logout())
    rednerApp()
    history.push('/')
  }
});




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
