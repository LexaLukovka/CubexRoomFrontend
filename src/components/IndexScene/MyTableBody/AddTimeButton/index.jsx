/* eslint-disable no-return-assign */
import React from 'react'
import { array, object, string } from 'prop-types'
import classNames from 'classnames'
import { Button, withStyles } from '@material-ui/core'
import connector from '../connector'
import moment from 'moment'

const styles = theme => ({
  green: {
    background: '#0d5e1c',
    color: theme.palette.secondary.light,
    '&:hover': {
      color: 'inherit',
    },
  },
  red: {
    background: '#68062c',
    color: theme.palette.secondary.light,
    '&:hover': {
      color: 'inherit',
    },
  },
  blue: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.light,
    '&:hover': {
      color: 'inherit',
    },
  },
  purple: {
    background: '#442757',
    color: theme.palette.secondary.light,
    '&:hover': {
      color: 'inherit',
    },
  },
})

class AddTimeButton extends React.Component {
  handleClick = (value) => {
    const { actions, color, calendar } = this.props
    actions.table.addTime({ color, value, calendar })
    actions.table.getTime()
  }

  isCheck = (value) => {
    const { data, color, calendar } = this.props
    let isChecked = false

    data.map(values =>
      values.color === color &&
      values.time === value &&
      values.date === moment(calendar)
        .format('YYYY-MM-DD') &&
      (isChecked = !isChecked))

    return isChecked
  }

  render() {
    const { classes, value, color } = this.props
    return <Button
      className={this.isCheck(value) ? classNames(classes[color]) : null}
      onClick={() => this.handleClick(value)}
    >
      {value}
    </Button>
  }
}


AddTimeButton.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  value: string.isRequired,
  color: string.isRequired,
  data: array.isRequired,
  calendar: string.isRequired,
}

export default withStyles(styles)(connector(AddTimeButton))
