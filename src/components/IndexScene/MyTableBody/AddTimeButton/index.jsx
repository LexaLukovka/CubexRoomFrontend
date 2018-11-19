/* eslint-disable no-return-assign */
import React from 'react'
import { number, object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'
import connector from '../connector'

const styles = theme => ({
  default: {},
  primary: {
    background: theme.palette.primary.main,
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
    const { classes, rowId, value } = this.props
    return <Button
      className={value.selected ? classes.primary : classes.default}
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
}

export default withStyles(styles)(connector(AddTimeButton))
