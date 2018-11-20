import React from 'react'
import { array, object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import InfiniteCalendar, { Calendar, withMultipleDates } from 'react-infinite-calendar'
import multipleDateInterpolation from 'utils/multipleDateInterpolation'
import moment from 'moment'
import connector from './connector'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: 10,
  },
}

class MyCalendar extends React.Component {
  handleSelect = (selectedDate) => {
    const { actions } = this.props
    actions.calendar.addDay(moment(selectedDate).format('YYYY-MM-DD'))
  }

  chooseColor = (selectedDate) => {
    const { data } = this.props
    const index = data.map(day => day.date).indexOf(selectedDate)

    if (index > -1) {
      return '#6cf47d'
    }
    return '#00dbfc'
  }

  render() {
    const { classes, data } = this.props
    return (
      <div className={classes.root}>
        <InfiniteCalendar
          width={1200}
          height={400}
          selected={data.map(day => day.date)}
          Component={withMultipleDates(Calendar)}
          onSelect={(date) => this.handleSelect(date)}
          theme={{ selectionColor: this.chooseColor }}
          interpolateSelection={multipleDateInterpolation(data.map(day => day.date))}
        />
      </div>
    )
  }
}


MyCalendar.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  data: array.isRequired,
}

export default withStyles(styles)(connector(MyCalendar))
