import React from 'react'
import { string } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import SizeRoomButton from './SizeRoomButton'
import Months from './Months'
import connector from './connector'

const styles = {}

function checkSize(color) {
  switch (color) {
    case 'green':
      return 'до 5'
    case 'red':
      return 'до 15'
    case 'blue':
      return 'до 25'
    case 'purple':
      return 'от 25'
    default:
      return 'до 25'
  }
}

const MyTableHead = ({ color }) =>
  <div className="flex">
    <Typography variant="subheading">Комната {checkSize(color)} человек</Typography>
    <SizeRoomButton />
    <Months />
  </div>

MyTableHead.propTypes = {
  color: string.isRequired,
}

export default withStyles(styles)(connector(MyTableHead))
