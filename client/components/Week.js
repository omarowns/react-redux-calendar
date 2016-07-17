import React from 'react'
import Day from './Day'
import moment from 'moment'

const Week = React.createClass({
  nextWeek(e) {
    const {startDate, incrementWeek, refreshCurrentEvents, events} = this.props

    incrementWeek(7);
    refreshCurrentEvents(events, moment(startDate).add(7, 'days'));
  },
  prevWeek(e) {
    const {startDate, decrementWeek, refreshCurrentEvents, events} = this.props

    decrementWeek(7);
    refreshCurrentEvents(events, moment(startDate).subtract(7, 'days'));
  },
  nextDay(e) {
    const {startDate, incrementWeek, refreshCurrentEvents, events} = this.props

    incrementWeek(1);
    refreshCurrentEvents(events, moment(startDate).add(1, 'days'));
  },
  prevDay(e) {
    const {startDate, decrementWeek, refreshCurrentEvents, events} = this.props

    decrementWeek(1);
    refreshCurrentEvents(events, moment(startDate).subtract(1, 'days'));
  },
  render() {
    const { startDate } = this.props
    const dates = [0,1,2,3,4,5,6].map((e,i) => moment(startDate).add(e, 'days'))
    return (
      <div className="week">
        <div className="action-button">
          <button onClick={this.prevWeek}>&lt;&lt;</button>
          <button onClick={this.prevDay}>&lt;</button>
        </div>
          {dates.map((e,i) =>
            <Day {...this.props} key={i} date={e}/>
          )}
        <div className="action-button">
          <button onClick={this.nextWeek}>&gt;&gt;</button>
          <button onClick={this.nextDay}>&gt;</button>
        </div>
      </div>
    )
  }
})

export default Week
