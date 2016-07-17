import React from 'react'
import { Link } from 'react-router'
import Event from './Event'

const Day = React.createClass({
  renderEvent(event, date, i) {
    if (event.date == date.format("MM/DD/YYYY")) {
      return (
        <li key={i}>
          <Event event={event} />
        </li>
      )
    }
  },
  render() {
    const { date, currentEvents } = this.props
    return (
      <div className="day">
        <div className="date-title">
          <h2>{date.format('ddd D MMM')}</h2>
        </div>
        <div className="current-events">
          <ul>
            {currentEvents.map((e,i) => this.renderEvent(e, date, i))}
          </ul>
        </div>
      </div>
    )
  }
})

export default Day
