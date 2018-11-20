import React from 'react'
import { string } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import checkSize from 'utils/checkSize'
import connector from './connector'

const styles = {}


const MyTableHead = ({ color }) =>
  <div className="flex">
    <Typography variant="subheading">Комната {checkSize(color)} человек</Typography>
  </div>

MyTableHead.propTypes = {
  color: string.isRequired,
}

export default withStyles(styles)(connector(MyTableHead))
