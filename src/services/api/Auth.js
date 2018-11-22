/* eslint-disable class-methods-use-this,no-underscore-dangle */
import JWT from 'jwt-decode'
import Http from 'services/Http'

class Auth {
  async register(credentials) {
    const { token } = await Http.post('/register', credentials)
    const user = JWT(token)._doc

    localStorage.setItem('user', JSON.stringify(user))
    return { token, ...user }
  }

  async login(credentials) {
    const { token } = await Http.post('/login', credentials)
    const user = JWT(token)._doc

    localStorage.setItem('user', JSON.stringify(user))
    return { token, ...user }
  }
}

export default new Auth()
