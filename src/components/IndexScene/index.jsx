import React from 'react'
import { array, object } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'

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
    display: 'flex',
    justifyContent: 'center',
  },
})

class IndexScene extends React.Component {
  componentDidMount() {
    const { actions, rows } = this.props
    actions.layout.background('/images/room.jpeg')
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
