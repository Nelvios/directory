import Axios from 'axios'

const HTTP = Axios.create({
  baseURL: 'https://dataemp-9c786.firebaseio.com',
  headers: { Accept: 'application/json' }
})

export default {
  getData () {
    return HTTP.get('/employee.json')
  }
}
