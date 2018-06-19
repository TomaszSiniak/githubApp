import React from 'react'
import ReactDOM from'react-dom'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'
import UserStore from './store/store'
import NotFound from './components/NotFound'
import { Provider } from 'mobx-react';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import './styles/styles.scss'

const history = createHistory ();

const App = (
  <Provider store = { UserStore }>
    <Router history= { history } >
      <Switch>
        <Route path="/list" component={UserList} exact={true}/>
        <Route path="/list/user/:id" component={UserDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
)


ReactDOM.render(App, document.querySelector('#app'))