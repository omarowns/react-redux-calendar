import React from 'react'

const Event = React.createClass({
  render() {
    const { event } = this.props
    return (
      <div className="event">
        {event.description}
      </div>
    )
  }
})

export default Event
