import React from 'react'
import { Link } from 'react-router'
import Event from './Event'

const Day = React.createClass({
  render() {
    const { date, currentEvents } = this.props
    return (
      <div className="day">
        <h2>{date.format('ddd D MMM')}</h2>
        <ul>
          {currentEvents.map((e,i) =>
            <li>
              <Event key={i} event={event} />
            </li>
          )}
        </ul>
      </div>
    )
  }
})

export default Day
