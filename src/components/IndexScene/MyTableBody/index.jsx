/* eslint-disable no-shadow */
import React from 'react'
import { array, object } from 'prop-types'
import { Paper, Table, TableBody, TableCell, TableRow, withStyles } from '@material-ui/core'
import AddTimeButton from './AddTimeButton'
import connector from './connector'

const styles = () => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
})

const MyTableBody = ({ classes, rows }) =>
  <div className={classes.root}>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          {rows.map(rowsDay =>
            <TableRow key={rowsDay.id}>
              {rowsDay.row.map((row, index) =>
                <React.Fragment key={index}>
                  <TableCell component="th" scope="row">{row.day}</TableCell>
                  <TableCell numeric> <AddTimeButton rowId={rowsDay.id} value={row} /> </TableCell>
                </React.Fragment>)}
            </TableRow>)}
        </TableBody>
      </Table>
    </Paper>
  </div>

MyTableBody.propTypes = {
  classes: object.isRequired,
  rows: array.isRequired,
}

export default withStyles(styles)(connector(MyTableBody))
