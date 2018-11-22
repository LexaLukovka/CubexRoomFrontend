import { withFormik } from 'formik'
import * as Yup from 'yup'
import transformValidationApi from 'utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      name: Yup.string()
        .required('Это поле является обязательным')
        .max(20, 'Имя не может быть больше чем 20 символов'),
      email: Yup.string()
        .required('Это поле является обязательным')
        .email('Неправильный email адрес!'),
      password: Yup.string()
        .required('Это поле является обязательным')
        .min(6, 'Пароль должен быть больше чем 6 символов'),
    }),

  mapPropsToValues: () => ({
    name: '',
    email: '',
    password: '',
  }),

  handleSubmit: (form, { props: { actions, history }, setErrors, setSubmitting }) => {
    actions.auth.register(form)
      .then(() => {
        setSubmitting(false)
        history.push('/')
      })
      .catch(errors => {
        setSubmitting(false)
        setErrors(transformValidationApi(errors))
      })
  },
  displayName: 'RegisterForm',
})

export default formik
