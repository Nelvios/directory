import myApi from '../../api/api'

const state = {
  employee: {},
  employeeExist: null,
  show: false,
  drawer: null
}

const getters = {
  getEmployeeDetail: state => {
    return state.employee
  },
  getEmployeeExistance: state => {
    return state.employeeExist
  },
  getEmpDrawerState: state => {
    return state.drawer
  },
  isHidden: state => {
    return state.show
  }
}

const mutations = {
  pushEmployee: (state, payload) => {
    state.employee = payload
  },
  employeeNotExist: state => {
    state.employeeExist = false
  },
  employeeExist: state => {
    state.employeeExist = true
  },
  changeSidePanelState: state => {
    state.show = !state.show
  },
  changeDrawerState: state => {
    state.drawer = !state.drawer
  }
}

const actions = {
  async checkExistance ({ commit }, payload) {
    await myApi.getByIdEmployee(payload)
      .then(res => {
        if (Object.keys(res.data).length === 0) {
          commit('employeeNotExist')
        } else {
          commit('employeeExist')
        }
      })
      .catch(err => console.log(err))
  },
  async getById ({ commit }, payload) {
    await myApi.getByIdEmployee(payload)
      .then(res => {
        res.data[payload].NIP = payload
        commit('pushEmployee', res.data[payload])
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
