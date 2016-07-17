import React from 'react'
import Day from './Day'
import moment from 'moment'

const Week = React.createClass({
  nextWeek(e) {
    const {startDate, incrementWeek, refreshCurrentEvents, events} = this.props
    incrementWeek(startDate);
    refreshCurrentEvents(events, startDate);
  },
  prevWeek(e) {
    const {startDate, decrementWeek, refreshCurrentEvents, events} = this.props
    decrementWeek(startDate);
    refreshCurrentEvents(events, startDate);
  },
  render() {
    const { startDate } = this.props
    const dates = [0,1,2,3,4,5,6].map((e,i) => moment(startDate).add(e, 'days'))
    return (
      <div className="week">
        <button onClick={this.prevWeek}>&lt;&lt;</button>
          {dates.map((e,i) =>
            <Day {...this.props} key={i} date={e}/>
          )}
        <button onClick={this.nextWeek}>&gt;&gt;</button>
      </div>
    )
  }
})

export default Week
