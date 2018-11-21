import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, CardActions, CardContent, Typography } from '@material-ui/core'

import { Field, Form } from 'formik'
import FormikText from 'components/@auth/formik/FormikText'
import FormikPassword from 'components/@auth/formik/FormikPassword'

import formik from './formik'
import connector from '../../connector'

const LoginForm = () =>
  <Form>
    <CardContent>
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
      <Button fullWidth variant="contained" type="submit" color="primary">
        <Typography color="secondary">Войти</Typography>
      </Button>
    </CardActions>
    <Link to="/auth/register">
      <Typography style={{ paddingTop: 5 }} gutterBottom align="center">Нет аккаунта?</Typography>
    </Link>
  </Form>

export default connector(withRouter(formik(LoginForm)))
