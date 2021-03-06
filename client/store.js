import { createStore, compse } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import moment from 'moment'

import rootReducer from './reducers/index'

import events from './data/events'

const startDate = moment()
const endDate = moment(startDate).add(8, 'days')

const currentEvents = events.filter(event =>
  moment(event.date, "MM/DD/YYYY").isBetween(moment(startDate).subtract(1, 'days'), endDate, null, '[]')
)

const defaultState = {
  events,
  startDate,
  currentEvents
}

const store = createStore(rootReducer, defaultState)
export const history = syncHistoryWithStore(browserHistory, store)

export default store
