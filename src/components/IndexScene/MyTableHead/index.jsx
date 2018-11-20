import React from 'react'
import { object, string } from 'prop-types'
import { Paper, Typography, withStyles } from '@material-ui/core'
import SizeRoomButton from './SizeRoomButton'
import checkSize from 'utils/checkSize'
import connector from './connector'
import classNames from 'classnames'

const styles = theme => ({
  paper: {
    marginBottom: 8,
  },
  green: {
    padding: 7,
    borderRadius: 8,
    background: '#4caf50',
    color: theme.palette.secondary.main,
  },
  red: {
    padding: 7,
    borderRadius: 8,
    background: theme.palette.secondary.dark,
    color: theme.palette.secondary.main,
  },
  blue: {
    padding: 7,
    borderRadius: 8,
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  purple: {
    padding: 7,
    borderRadius: 8,
    background: '#9c27b0',
    color: theme.palette.secondary.main,
  },
})


const MyTableHead = ({ classes, color }) =>
  <React.Fragment>
    <Paper className={classNames(classes[color], classes.paper)}>
      <Typography align="center" color="inherit" variant="subheading">
        Комната - {checkSize(color)} человек
      </Typography>
    </Paper>
    <SizeRoomButton />
  </React.Fragment>

MyTableHead.propTypes = {
  classes: object.isRequired,
  color: string.isRequired,
}

export default withStyles(styles)(connector(MyTableHead))
