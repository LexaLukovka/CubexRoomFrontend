/* eslint-disable no-shadow */
import React from 'react'
import { array, object } from 'prop-types'
import { Paper, Table, TableBody, TableCell, TableRow, withStyles } from '@material-ui/core'
import connector from './connector'
import Row from './Row'

const styles = () => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    background: 'rgba(255, 255, 255, 0.35)',
  },
})

const MyTableBody = ({ classes, rows }) =>
  <div className={classes.root}>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody className={classes.body}>
          {rows.map(rowsDay =>
            <TableRow key={rowsDay.id}>
              <TableCell component="th" scope="row">{rowsDay.day}</TableCell>
              <Row rowsDay={rowsDay} />
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
