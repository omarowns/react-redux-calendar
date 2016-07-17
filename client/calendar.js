// let's go!
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

// Import css
import css from './styles/style.styl';

import Main from './components/Main'
import Week from './components/Week'
import Day from './components/Day'
import Event from './components/Event'

import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Week}></IndexRoute>
        <Route path="/day/:day" component={Day}></Route>
        <Route path="/event/:event" component={Event}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
