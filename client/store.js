import { createStore, compse } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import moment from 'moment'

import rootReducer from './reducers/index'

import events from './data/events'

const startDate = moment()

const defaultState = {
  events,
  startDate
}

const store = createStore(rootReducer, defaultState)
export const history = syncHistoryWithStore(browserHistory, store)

export default store
