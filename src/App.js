import React from 'react';
import AppRouter from './routers/AppRouter';
import './App.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';



const store = configureStore();

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
