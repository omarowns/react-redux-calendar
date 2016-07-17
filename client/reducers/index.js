import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import events from './events'
import startDate from './startDate'

const rootReducer = combineReducers({events, startDate, routing: routerReducer})

export default rootReducer
