import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import AddTimeButton from './AddTimeButton'

const styles = theme => ({
  root: {
    width: '100%',
    margin: '5px',
    display: 'grid',
    gridAutoFlow: 'dense',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',


    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
      margin: '0',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
      margin: '0',
      gridRowGap: '5px',
    },
  },
})

const Row = ({ classes, rowsDay }) =>
  <div className={classes.root}>
    {rowsDay.row.map((row, index) =>
      <div key={index}>
        <AddTimeButton rowId={rowsDay.id} value={row} />
      </div>)}
  </div>

Row.propTypes = {
  classes: object.isRequired,
  rowsDay: object.isRequired,
}

export default withStyles(styles)(Row)
