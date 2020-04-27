import myApi from '../../api/api'

const state = {
  seats: null
  // seats: [
  // { id: 1, name: 'A1', x: 10, y: 10, isVacant: true, isCubicle: true, empId: '11111111' },
  // { id: 2, name: 'A2', x: 20, y: 10, isVacant: true, isCubicle: true, empId: '22222222' }
  // { id: 3, name: 'A3', x: 30, y: 10, isVacant: true, isCubicle: true, empId: '33333333' },
  // { id: 4, name: 'A4', x: 40, y: 10, isVacant: true, isCubicle: true, empId: '44444444' },
  // { id: 5, name: 'A5', x: 50, y: 10, isVacant: true, isCubicle: true, empId: '55555555' },
  // { id: 6, name: 'A6', x: 60, y: 10, isVacant: true, isCubicle: true, empId: '66666666' },
  // { id: 7, name: 'A7', x: 70, y: 10, isVacant: true, isCubicle: true, empId: '77777777' }
  // ]
}

const getters = {
  retrieveSeats: state => {
    return state.seats
  }
}

const mutations = {
  initData: (state, payload) => {
    state.seats = payload
  },
  addSeat (state, payload) {
    state.seats.push(payload)
  },
  removePointer (state, payload) {
    state.seats.splice(payload, 1)
  }
}

const actions = {
  postSeat: ({ commit }, payload) => {
    myApi.postSeat(payload)
      .then(res => {
        console.log(res)
        commit('addSeat', payload)
      })
      .catch(err => console.log(err))
  },
  getAllSeat: ({ commit }) => {
    myApi.getAllSeat()
      .then(res => {
        const resultArray = []
        for (const i in res.data) {
          resultArray.push(res.data[i])
        }
        commit('initData', resultArray)
      })
      .catch(err => console.log(err))
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
