import myApi from '../../api/api'

const state = {
  employee: null
}

const getters = {
  getAllDataEmployee: state => {
    return state.employee
  }
}

const mutations = {
  InitData: (state, payload) => {
    state.employee = payload
  }
}

const actions = {
  getAll: ({ commit }) => {
    myApi.getData()
      .then(res => {
        const resultArray = []
        for (const i in res.data) {
          const repack = {}
          repack[i] = res.data[i]
          resultArray.push(repack)
        }
        commit('InitData', resultArray)
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
