// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import { Provider } from 'react-redux'; /* code change */
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer); /* code change */

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById('root')
);
