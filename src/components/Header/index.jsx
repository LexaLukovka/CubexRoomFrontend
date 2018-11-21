/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import { object, string } from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Toolbar, Typography, withStyles } from '@material-ui/core'
import UserMenu from './UserMenu'
import connector from './connector'

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
  },
  toolbar: {
    display: 'flex',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
})

const Header = ({ classes, color }) =>
  <header className={classes.root}>
    <div className={classNames(color)}>
      <Toolbar className={classes.toolbar}>

        <Typography variant="title" color="secondary" className={classes.title}>
          <Link to="/">Бронирование зала для заседаний</Link>
        </Typography>

        <UserMenu />
      </Toolbar>
    </div>
  </header>

Header.propTypes = {
  classes: object.isRequired,
  color: string.isRequired,
}

export default withStyles(styles)(connector(Header))
