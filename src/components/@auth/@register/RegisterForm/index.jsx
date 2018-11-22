import React from 'react'
import { object } from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Button, CardActions, CardContent, Typography, withStyles } from '@material-ui/core'

import { Field, Form } from 'formik'
import FormikText from 'components/@auth/formik/FormikText'
import FormikPassword from 'components/@auth/formik/FormikPassword'

import formik from './formik'
import connector from '../../connector'

const styles = theme => ({
  button: {
    '&:hover': {
      background: theme.palette.primary.light,
    },
  },
  link: {
    padding: 5,
  },
})

const RegisterForm = ({ classes }) =>
  <Form>
    <CardContent>
      <Field
        label="Имя и фамилия"
        component={FormikText}
        name="name"
        type="name"
        placeholder="Вася Пупкин"
      />
      <Field
        label="Email"
        component={FormikText}
        name="email"
        type="email"
        placeholder="email@example.com"
      />
      <Field
        label="Пароль"
        name="password"
        component={FormikPassword}
        placeholder="*******"
      />
    </CardContent>
    <CardActions>
      <Button fullWidth variant="contained" type="submit" color="primary" className={classes.button}>
        <Typography color="secondary">Зарегистрироваться</Typography>
      </Button>
    </CardActions>
    <Link to="/auth/login">
      <Typography className={classes.link} gutterBottom align="center">Есть аккаунт</Typography>
    </Link>
  </Form>

RegisterForm.propTypes = {
  classes: object.isRequired,
}

const formiks = formik(RegisterForm)
const router = withRouter(formiks)
const connect = connector(router)
const style = withStyles(styles)(connect)

export default style
