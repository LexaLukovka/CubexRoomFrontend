import React from 'react'
import { object, string, node } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    paddingTop: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      paddingTop: 10,
    },
  },
})

const Container = ({ children, className, classes }) =>
  <main className={`${classes.root} ${className}`}>
    {children}
  </main>

Container.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  className: string,
}
Container.defaultProps = {
  className: '',
}

export default withStyles(styles)(Container)
