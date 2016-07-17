import moment from 'moment'

function startDates(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_WEEK':
      return moment(state).add(action.days, 'days')
    case 'DECREMENT_WEEK':
      return moment(state).subtract(action.days, 'days')
    default:
      return state;
  }
}

export default startDates;
