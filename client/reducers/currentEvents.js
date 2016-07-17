import moment from 'moment'

function currentEvents(state = [], action) {
  const startDate = action.startDate
  const endDate = moment(startDate).add(7, 'days')

  switch (action.type) {
    case 'REFRESH_EVENTS':
      return action.events.filter(event => moment(event.date, "MM/DD/YYYY").isBetween(startDate, endDate) );
    default:
      return state;
  }
}

export default currentEvents;
