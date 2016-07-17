// Increase the week forward
export function incrementWeek(startDate) {
  return {
    type: 'INCREMENT_WEEK',
    startDate
  }
}

// Decrease the week backwards
export function decrementWeek(startDate) {
  return {
    type: 'DECREMENT_WEEK',
    startDate
  }
}
