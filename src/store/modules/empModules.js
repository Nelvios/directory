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
        for (const key in res.data) {
          console.log('key Value: ' + key)
          const employDat = res.dat[key]
          for (const value in employDat) {
            console.log('value: ' + value)
          }
        }
      })
      // .then(data => {
      //   const resultArray = []
      //   for (const key in data) {
      //     resultArray.push(data[key])
      //   }
      //   console.log(resultArray)
      // })
      // .catch(err => console.log(err))
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
