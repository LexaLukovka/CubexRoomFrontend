/* eslint-disable no-return-assign */
import React from 'react'
import { array, number, object, string } from 'prop-types'
import classNames from 'classnames'
import { Button, withStyles } from '@material-ui/core'
import connector from '../../connector'
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
  handleClick = (id, value) => {
    const { actions, calendar } = this.props
    actions.table.addTime({ id, value, calendar })
    actions.table.getTime()
  }

  isCheck = (rowId, value) => {
    const { data, calendar } = this.props
    let isChecked = false

    data.map(values =>
      values.id === rowId &&
      values.time === value &&
      values.date === moment(calendar).format('YYYY-MM-DD') &&
      (isChecked = !isChecked))

    return isChecked
  }

  render() {
    const { classes, rowId, value, color } = this.props
    return <Button
      className={this.isCheck(rowId, value) ? classNames(classes[color]) : null}
      onClick={() => this.handleClick(rowId, value)}
    >
      {value}
    </Button>
  }
}


AddTimeButton.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  rowId: number.isRequired,
  value: string.isRequired,
  color: string.isRequired,
  data: array.isRequired,
  calendar: string.isRequired,
}

export default withStyles(styles)(connector(AddTimeButton))
