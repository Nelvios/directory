import axios from 'axios'

const state = {
  employee: {}
}

const getters = {

}

const mutations = {

}

const actions = {
  getAll: ({ commit }) => {
    axios.get('/employee.json')
      .then(res => {
        return Response.json()
      })
      .then(data => {
        const resultArray = []
        for (const key in data) {
          resultArray.push(data[key])
        }
        console.log(resultArray)
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
