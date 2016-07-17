// let's go!
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

// Import css
import css from './styles/app.scss';

import App from './components/App'
import Week from './components/Week'
import Day from './components/Day'
import Event from './components/Event'

import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Week}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
