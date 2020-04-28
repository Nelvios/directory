import Axios from 'axios'

const httpEmployee = Axios.create({
  baseURL: 'https://dataemp-9c786.firebaseio.com',
  headers: { Accept: 'application/json' }
})

const httpSeat = Axios.create({
  baseURL: 'https://seat-45454.firebaseio.com'
})

export default {
  getDataEmployee () {
    return httpEmployee.get('/employee.json')
  },
  getByIdEmployee (searchId) {
    return httpEmployee.get(`/employee.json?orderBy="$key"&equalTo="${searchId}"`)
  },
  postSeat (payload) {
    return httpSeat.post('/seat.json', payload)
  },
  deleteSeat (selectedId) {
    return httpSeat.delete(`/seat/${selectedId}.json`)
  },
  patchSeat (selectedId, payload) {
    return httpSeat.patch(`/seat/${selectedId}.json`, payload)
  },
  getAllSeat () {
    return httpSeat.get('/seat.json')
  }
}
