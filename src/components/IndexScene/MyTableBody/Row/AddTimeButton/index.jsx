/* eslint-disable no-return-assign */
import React from 'react'
import { number, string, object } from 'prop-types'
import classNames from 'classnames'
import { Button, withStyles } from '@material-ui/core'
import connector from '../../connector'

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
    const { actions } = this.props
    actions.table.addTime(id, value)
    actions.table.getTime()
  }

  render() {
    const { classes, rowId, value, color } = this.props
    return <Button
      className={value.selected ? classNames(classes[color]) : null}
      onClick={() => this.handleClick(rowId, value)}
    >
      {value.time}
    </Button>
  }
}


AddTimeButton.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  rowId: number.isRequired,
  value: object.isRequired,
  color: string.isRequired,
}

export default withStyles(styles)(connector(AddTimeButton))
