import React from 'react'
import { array, object } from 'prop-types'
import { Tab, Tabs, withStyles } from '@material-ui/core'
import classNames from 'classnames'
import connector from './connector'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 5,
  },
  green: {
    padding: 0,
    color: 'white',
    background: '#4caf50',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  red: {
    padding: 0,
    color: 'white',
    background: theme.palette.secondary.dark,
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  blue: {
    padding: 0,
    color: 'white',
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  purple: {
    padding: 0,
    color: 'white',
    background: '#9c27b0',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
})

class SizeRoomButton extends React.Component {
  state = {
    value: 2,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleClick = (color) => {
    const { actions } = this.props
    actions.layout.background(`/images/${color}.jpg`)
    actions.header.color(color)
  }

  render() {
    const { classes, halls } = this.props
    const { value } = this.state

    return (
      <Tabs
        value={value}
        className={classes.root}
        indicatorColor="secondary"
        onChange={this.handleChange}
      >
        {halls.map(hall =>
          <Tab
            className={classNames(classes[hall.color])}
            onClick={() => this.handleClick(hall.color)}
            label={hall.hall}
          />)}
      </Tabs>
    )
  }
}

SizeRoomButton.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  halls: array.isRequired,
}

export default withStyles(styles)(connector(SizeRoomButton))
