import moment from 'moment'

function currentEvents(state = [], action) {
  const startDate = state.startDate
  const endDate = moment(startDate).add(7, 'days')

  switch (action.type) {
    case 'INCREMENT_WEEK':
    case 'DECREMENT_WEEK':
      return state;
    default:
      return state;
  }
}

export default currentEvents;
