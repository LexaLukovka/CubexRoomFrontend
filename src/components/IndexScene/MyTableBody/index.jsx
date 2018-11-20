/* eslint-disable no-shadow */
import React from 'react'
import { array, object } from 'prop-types'
import { Paper, withStyles } from '@material-ui/core'
import connector from './connector'
import AddTimeButton from './AddTimeButton'

const styles = theme => ({
  root: {
    width: '100%',
    padding: 10,
    background: 'rgba(255, 255, 255, 0.4)',
  },
  table: {
    width: '100%',
    margin: '5px',
    display: 'grid',
    gridAutoFlow: 'dense',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',

    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
      margin: '0',
      gridRowGap: '5px',
      textAlign: 'center',
    },
  },
})

const MyTableBody = ({ classes, rows }) =>
  <Paper className={classes.root}>
    <div className={classes.table}>
      {rows.map((row, index) =>
        <div key={index} className={classes.rows}>
          <AddTimeButton value={row} />
        </div>)}
    </div>
  </Paper>


MyTableBody.propTypes = {
  classes: object.isRequired,
  rows: array.isRequired,
}

export default withStyles(styles)(connector(MyTableBody))
