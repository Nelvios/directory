import myApi from '../../api/api'

const state = {
  employee: null,
  employeeExist: null
}

const getters = {
  getAllDataEmployee: state => {
    return state.employee
  },
  getEmployeeExistance: state => {
    return state.employeeExist
  }
}

const mutations = {
  InitData: (state, payload) => {
    state.employee = payload
  },
  employeeNotExist: (state) => {
    state.employeeExist = false
  },
  employeeExist: (state) => {
    state.employeeExist = true
  }
}

const actions = {
  async getById ({ commit }, payload) {
    await myApi.getByIdEmployee(payload)
      .then(res => {
        console.log(res.data)
        if (Object.keys(res.data).length === 0) {
          commit('employeeNotExist')
        } else {
          commit('employeeExist')
        }
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
