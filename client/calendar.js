// let's go!
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Import css
import css from './styles/style.styl';

import Main from './components/Main'
import Week from './components/Week'
import Day from './components/Day'
import Event from './components/Event'

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Week}></IndexRoute>
      <Route path="/day/:day" component={Day}></Route>
      <Route path="/event/:event" component={Event}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
