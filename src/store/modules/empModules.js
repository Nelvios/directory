import myApi from '../../api/api'

const state = {
  employee: {},
  employeeExist: null,
  show: false
}

const getters = {
  getEmployeeFullName: state => {
    return state.employee.sambutan + '. ' + state.employee.fullName
  },
  getEmployeeGroup: state => {
    return state.employee.group
  },
  getEmployeeInitial: state => {
    return state.employee.initial
  },
  getEmployeeOfficeLocation: state => {
    return state.employee.officeLocation
  },
  getEmployeeSeatNumber: state => {
    return state.employee.seatNumber
  },
  getEmployeeSyncManager: state => {
    return state.employee.syncManager
  },
  getEmployeeExistance: state => {
    return state.employeeExist
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
  hideSidePanel: state => {
    state.show = false
  },
  showSidePanel: state => {
    state.show = true
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
