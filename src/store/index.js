import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    installFolder: ''
  },
  mutations: {
    setInstallFolder (state, path) {
      state.installFolder = path
    }
  },
  actions: {
  },
  modules: {
  }
})
