import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    position: '上海'
  },
  mutations: {
    setPosition (state, val) {
      state.position = val
    }
  },
  actions: {
    setPosition ({commit}, payload) {
      commit('setPosition', payload)
    }
  },
  modules: {
  }
})
