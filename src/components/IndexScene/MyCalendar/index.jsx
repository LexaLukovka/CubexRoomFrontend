import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import InfiniteCalendar from 'react-infinite-calendar'
import moment from 'moment'
import connector from './connector'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: 10,
  },
}

class Calendar extends React.Component {
  handleSelect = (selectedDate) => {
    const { actions } = this.props
    actions.calendar.addDay(moment(selectedDate).format('YYYY-MM-DD'))
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <InfiniteCalendar
          displayOptions={{
            layout: 'landscape',
          }}
          width={1100}
          height={350}
          onSelect={(date) => this.handleSelect(date)}
        />
      </div>
    )
  }
}


Calendar.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(Calendar))
