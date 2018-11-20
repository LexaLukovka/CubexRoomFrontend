import React from 'react'
import { object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'
import connector from './connector'

const styles = theme => ({
  root: {},
  green: {
    padding: '0 20px',
    margin: 10,
    color: '#4caf50',
  },
  red: {
    padding: '0 20px',
    margin: 10,
    color: theme.palette.secondary.dark,
  },
  blue: {
    padding: '0 20px',
    margin: 10,
    color: theme.palette.primary.main,

  },
  purple: {
    padding: '0 20px',
    margin: 10,
    color: '#9c27b0',
  },
})

class SizeRoomButton extends React.Component {
  handleClick = (color) => {
    const { actions } = this.props
    actions.layout.background(`/images/${color}.jpg`)
    actions.header.color(color)
  }

  render() {
    const { classes } = this.props
    return (
      <div className="flex">
        <Button className={classes.green} onClick={() => this.handleClick('green')}>До 5</Button>
        <Button className={classes.red} onClick={() => this.handleClick('red')}>До 15</Button>
        <Button className={classes.blue} onClick={() => this.handleClick('blue')}>До 25</Button>
        <Button className={classes.purple} onClick={() => this.handleClick('purple')}>От 25</Button>
      </div>

    )
  }
}

SizeRoomButton.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(SizeRoomButton))
