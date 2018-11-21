import Auth from 'services/api/Auth'

export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_PENDING = 'REGISTER_USER_PENDING'
export const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED'
export const REGISTER_USER_REJECTED = 'REGISTER_USER_REJECTED'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING'
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'
export const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED'

export const LOGOUT_USER = 'LOGIN_USER'

const register = (form) => ({
  type: REGISTER_USER,
  payload: Auth.register(form),
})


// noinspection JSUnusedGlobalSymbols
const login = (form) => ({
  type: LOGIN_USER,
  payload: Auth.login(form),
})


// noinspection JSUnusedGlobalSymbols
const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_USER,
  })

  localStorage.setItem('user', JSON.stringify(null))
}

export default { login, register, logout }
