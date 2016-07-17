import React from 'react'

const Event = React.createClass({
  render() {
    const { event } = this.props
    return (
      <div className="event">
        <h3>{event.date} @ {event.time}</h3>
        <p>{event.description}</p>
      </div>
    )
  }
})

export default Event
