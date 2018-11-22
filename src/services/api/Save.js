/* eslint-disable class-methods-use-this,no-underscore-dangle */
import Http from 'services/Http'

class Save {
  get() {
    return Http.get('/save')
  }

  save(data) {
    return Http.post('/save', data)
  }
}

export default new Save()
