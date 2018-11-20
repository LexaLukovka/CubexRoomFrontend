import React from 'react'
import { object } from 'prop-types'
import { TableCell } from '@material-ui/core'
import AddTimeButton from './AddTimeButton'


const Row = ({ rowsDay }) =>
  rowsDay.row.map((row, index) =>
    <TableCell key={index} numeric> <AddTimeButton rowId={rowsDay.id} value={row} /> </TableCell>)

Row.propTypes = {
  rowsDay: object.isRequired,
}

export default Row
