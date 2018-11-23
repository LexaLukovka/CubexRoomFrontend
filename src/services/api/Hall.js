/* eslint-disable class-methods-use-this,no-underscore-dangle */
import Http from 'services/Http'

class Hall {
  get() {
    return Http.get('/hall')
  }
}

export default new Hall()
