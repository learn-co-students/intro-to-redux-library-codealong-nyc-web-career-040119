// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import { Provider } from 'react-redux'
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';


//createStore() - when invoked, returns an instance of the Redux store to us
//import createStore in src/index.js

//to avoid passing store as a prop, we use the Provider component, imported from react-redux
  //Provider component wraps top-level component and is the only component where store is passed in
const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(<App store={store} />, document.getElementById('root'))
