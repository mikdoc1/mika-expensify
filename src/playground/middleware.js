import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware'

const initState = {
    fetching: false,
    fetched: false,
    data: [],
    error: null
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case('FETCH_DATA_PENDING'):
            return {...state, fetching: true};
        case('FETCH_DATA_FULFILLED'):
            return {...state, fetching: false, fetched: true, data: [...state.data, action.data]};
        case('FETCH_DATA_REJECTED'):
            return {...state, fetching: false, fetched: true, error: action.error};
        default:
            return state     
    }
};

const store = createStore(reducer, applyMiddleware(thunk, promise, logger));

store.dispatch({
    type: "FETCH_DATA",
    payload: axios.get('https://jsonplaceholder.typicode.com/todos/1')
});


const Z = () => <h1>Middleware test</h1>;
export default  Z