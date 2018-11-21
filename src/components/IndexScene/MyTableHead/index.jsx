import React from 'react'
import { object, string } from 'prop-types'
import { Paper, TextField, withStyles } from '@material-ui/core'
import SizeRoomButton from './SizeRoomButton'
import connector from './connector'
import classNames from 'classnames'
import moment from 'moment'

const styles = theme => ({
  paper: {
    marginBottom: 8,
    textAlign: 'center',
  },
  input: {
    color: 'white',
  },
  green: {
    padding: 7,
    borderRadius: 8,
    background: '#4caf50',
    color: theme.palette.secondary.main,
  },
  red: {
    padding: 7,
    borderRadius: 8,
    background: theme.palette.secondary.dark,
    color: theme.palette.secondary.main,
  },
  blue: {
    padding: 7,
    borderRadius: 8,
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  purple: {
    padding: 7,
    borderRadius: 8,
    background: '#9c27b0',
    color: theme.palette.secondary.main,
  },
})


class MyTableHead extends React.Component {
  handleSelect = (selectedDate) => {
    const { actions } = this.props
    actions.calendar.addDay(moment(selectedDate)
      .format('YYYY-MM-DD'))
  }

  render() {
    const { classes, color } = this.props
    return (
      <React.Fragment>
        <Paper className={classNames(classes[color], classes.paper)}>
          <TextField
            type="date"
            defaultValue={moment(new Date())
              .format('YYYY-MM-DD')}
            // classes={{ label: classes.input }}
            onChange={(date) => this.handleSelect(date)}
          />
        </Paper>
        <SizeRoomButton />
      </React.Fragment>

    )
  }
}

MyTableHead.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  color: string.isRequired,
}

export default withStyles(styles)(connector(MyTableHead))
