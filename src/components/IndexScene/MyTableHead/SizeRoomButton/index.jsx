import React from 'react'
import { object } from 'prop-types'
import { Tab, Tabs, withStyles } from '@material-ui/core'
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
    const { classes } = this.props
    const { value } = this.state

    return (
      <Tabs
        value={value}
        className={classes.root}
        indicatorColor="secondary"
        onChange={this.handleChange}
      >
        <Tab className={classes.green} onClick={() => this.handleClick('green')} label="До 5" />
        <Tab className={classes.red} onClick={() => this.handleClick('red')} label="До 15" />
        <Tab className={classes.blue} onClick={() => this.handleClick('blue')} label="До 25" />
        <Tab className={classes.purple} onClick={() => this.handleClick('purple')} label="От 25" />
      </Tabs>
    )
  }
}

SizeRoomButton.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(SizeRoomButton))
