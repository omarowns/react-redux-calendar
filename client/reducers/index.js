import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import events from './events'
import startDate from './startDate'
import currentEvents from './currentEvents'

const rootReducer = combineReducers({events, startDate, currentEvents, routing: routerReducer})

export default rootReducer
