import React from 'react'
import { array, object } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'

import MyCalendar from './MyCalendar'
import MyTableHead from './MyTableHead'
import MyTableBody from './MyTableBody'

import LocalStorage from 'services/LocalStorage'
import connector from './connector'

const styles = () => ({
  root: {
    marginTop: 30,
  },
  card: {
    padding: 20,
    background: 'rgba(255, 255, 255, 0.7)',
  },
})

class IndexScene extends React.Component {
  componentDidMount() {
    const { actions, rows } = this.props
    actions.layout.background('/images/blue.jpg')
    actions.header.color('blue')

    document.title = 'Cubex'

    actions.table.getTime()

    if (!LocalStorage.get('rows')) {
      LocalStorage.put('rows', rows)
    }
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <MyCalendar />
        <Card className={classes.card}>
          <div>
            <MyTableHead />
            <MyTableBody />
          </div>
        </Card>
      </div>
    )
  }
}

IndexScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  rows: array.isRequired,
}

export default withStyles(styles)(connector(IndexScene))
