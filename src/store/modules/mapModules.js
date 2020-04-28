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
    const resultArray = []
    for (const i in state.seats) {
      for (const z in state.seats[i]) {
        resultArray.push(state.seats[i][z])
      }
    }
    return resultArray
  }
}

const mutations = {
  initData: (state, payload) => {
    state.seats = payload
  },
  addSeat (state, payload) {
    state.seats.push(payload)
  },
  removeSeat (state, payload) {
    state.seats.splice(payload, 1)
  },
  addId (state, payload) {
    state.seats[payload.index][payload.id].empId = payload.empId
  },
  removeId (state, payload) {
    state.seats[payload.index][payload.id] = payload.seatData
  }
}

const actions = {
  postSeat: ({ commit }, payload) => {
    myApi.postSeat(payload)
      .then(res => {
        const temp = { [res.data.name]: payload }
        commit('addSeat', temp)
      })
      .catch(err => console.log(err))
  },
  deleteSeat: ({ commit, state }, payload) => {
    let temp = null
    temp = { index: payload, id: Object.keys(state.seats[payload])[0] }
    myApi.deleteSeat(temp.id)
    commit('removeSeat', temp.index)
  },
  addEmpId: ({ commit, state }, payload) => {
    const tempUpdate = { empId: payload.empId }
    const id = Object.keys(state.seats[payload.index])[0]
    payload.id = id
    myApi.patchSeat(id, tempUpdate)
    commit('addId', payload)
  },
  deleteId: ({ commit, state }, payload) => {
    const id = Object.keys(state.seats[payload.index])[0]
    myApi.patchSeat(id, payload.seatData)
    commit('removeId', payload)
  },
  getAllSeat: ({ commit }) => {
    myApi.getAllSeat()
      .then(res => {
        const resultArray = []
        for (const i in res.data) {
          const tempObject = { [i]: res.data[i] }
          resultArray.push(tempObject)
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
