import moment from 'moment'

function currentEvents(state = [], action) {
  const startDate = moment(action.startDate).subtract(1, 'days')
  const endDate = moment(startDate).add(8, 'days')

  switch (action.type) {
    case 'REFRESH_EVENTS':
      return action.events.filter(event => moment(event.date, "MM/DD/YYYY").isBetween(startDate, endDate, null, '[]') );
    default:
      return state;
  }
}

export default currentEvents;
