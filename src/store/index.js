import Vue from 'vue'
import Vuex from 'vuex'
import buttonChanged from './modules/buttonChanged'
import mapProcess from './modules/mapProcess'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    buttonChanged,
    mapProcess
  }
})
