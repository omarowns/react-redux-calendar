// Increase the week forward
export function incrementWeek(days) {
  return {
    type: 'INCREMENT_WEEK',
    days
  }
}

// Decrease the week backwards
export function decrementWeek(days) {
  return {
    type: 'DECREMENT_WEEK',
    days
  }
}

// Refresh current events
export function refreshCurrentEvents(events, startDate) {
  return {
    type: 'REFRESH_EVENTS',
    events,
    startDate
  }
}
