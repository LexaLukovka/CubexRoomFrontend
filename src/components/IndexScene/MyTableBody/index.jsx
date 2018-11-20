/* eslint-disable no-shadow */
import React from 'react'
import { array, object } from 'prop-types'
import { Button, Divider, Paper, withStyles } from '@material-ui/core'
import Row from './Row'
import classNames from 'classnames'
import checkSize from 'utils/checkSize'
import connector from './connector'

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    background: 'rgba(255, 255, 255, 0.35)',
  },
  rows: {
    display: 'flex',
    alignItems: 'center',
  },
  green: {
    padding: '0 20px',
    margin: 10,
    background: '#0d5e1c',
    color: theme.palette.secondary.main,
  },
  red: {
    padding: '0 20px',
    margin: 10,
    background: '#68062c',
    color: theme.palette.secondary.main,
  },
  blue: {
    padding: '0 20px',
    margin: 10,
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  purple: {
    padding: '0 20px',
    margin: 10,
    background: '#442757',
    color: theme.palette.secondary.main,
  },
})

class MyTableBody extends React.Component {
  handleClick = (color) => {
    const { actions } = this.props
    actions.layout.background(`/images/${color}.jpg`)
    actions.header.color(color)
  }

  render() {
    const { classes, rows } = this.props
    return (
      <div className={classes.root}>
        <Paper className={classes.root}>
          <div className={classes.table}>
            {rows.map(rowsDay =>
              <React.Fragment key={rowsDay.id}>
                <div className={classes.rows}>
                  <Button
                    className={classNames(classes[rowsDay.day])}
                    onClick={() => this.handleClick(rowsDay.day)}
                  >
                    {checkSize(rowsDay.day)}
                  </Button>
                  <Row rowsDay={rowsDay} />
                </div>
                <Divider />
              </React.Fragment>)}
          </div>
        </Paper>
      </div>
    )
  }
}

MyTableBody.propTypes = {
  actions: object.isRequired,
  classes: object.isRequired,
  rows: array.isRequired,
}

export default withStyles(styles)(connector(MyTableBody))
