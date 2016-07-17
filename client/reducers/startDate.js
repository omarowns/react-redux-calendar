import moment from 'moment'

function startDates(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_WEEK':
      return moment(action.startDate).add(7, 'days')
    case 'DECREMENT_WEEK':
      return moment(action.startDate).subtract(7, 'days')
    default:
      return state;
  }
}

export default startDates;
