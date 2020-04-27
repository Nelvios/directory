import Vue from 'vue'
import Vuex from 'vuex'
import homeButtonModules from './modules/homeButtonModules'
import mapModules from './modules/mapModules'
import empModules from './modules/empModules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    homeButtonModules,
    mapModules,
    empModules
  }
})
