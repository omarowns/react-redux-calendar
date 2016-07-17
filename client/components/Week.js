import React from 'react'
import Day from './Day'
import moment from 'moment'

const Week = React.createClass({
  render() {
    const { startDate } = this.props
    const dates = [0,1,2,3,4,5,6].map((e,i) => moment(startDate).add(e, 'days'))
    return (
      <div className="week">
        <button>&lt;&lt;</button>
          {dates.map((e,i) =>
            <Day {...this.props} key={i} date={e}/>
          )}
        <button>&gt;&gt;</button>
      </div>
    )
  }
})

export default Week
