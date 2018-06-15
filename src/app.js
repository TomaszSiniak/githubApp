import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import UserStore from './store/store'
import { Provider } from 'mobx-react';

import './styles/styles.scss';

const MyApp = (
  <Provider store ={UserStore}>
      <App />
  </Provider>
)


ReactDOM.render(MyApp, document.querySelector('#app'));