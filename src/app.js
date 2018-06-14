import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import usersReducer from  './reducers/users';
import searchReducer from  './reducers/search';

import './styles/styles.scss';


const reducers = combineReducers({
  search: searchReducer,
  users: usersReducer,
})

const store = createStore(reducers)

const MyApp = () => (
  <Provider store= {store}>
    <App />
  </Provider>
)

ReactDOM.render(<MyApp />, document.querySelector('#app'));