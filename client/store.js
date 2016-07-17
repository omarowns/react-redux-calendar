import { createStore, compse } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import * as moment from 'moment'

import rootReducer from './reducers/index'

import events from './data/events'

const defaultState = {
  events,
  startDate: moment()
}

const store = createStore(rootReducer, defaultState)
const history = syncHistoryWithStore(browserHistory, store)

export default store
export history
