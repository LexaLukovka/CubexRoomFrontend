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
      return '#6e64ff'
    }
    return 'rgb(146, 118, 255)'
  }

  render() {
    const { classes, data } = this.props
    return (
      <div className={classes.root}>
        <InfiniteCalendar
          width={600}
          height={400}
          selected={data.map(day => day.date)}
          Component={withMultipleDates(Calendar)}
          onSelect={(date) => this.handleSelect(date)}
          theme={{
            selectionColor: this.chooseColor,
            textColor: {
              default: '#333',
              active: '#FFF',
            },
            weekdayColor: 'rgb(146, 118, 255)',
            headerColor: 'rgb(127, 95, 251)',
            floatingNav: {
              background: 'rgba(81, 67, 138, 0.96)',
              color: '#FFF',
              chevron: '#FFA726',
            },
          }}
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
