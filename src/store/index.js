import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleSettings = {
  state: {
    header: {
      title: null,
      description: null
    }
  },
  getters: {
    getHeader (state) {
      return state.header
    }
  },
  mutations: {
    setHeader: (state, payload) => {
      state.header = {
        title: payload.title ?? null,
        description: payload.description ?? null
      }
    },
    resetHeaderTitle (state) {
      state.header.title = null
    },
    setHeaderDescription: (state, payload) => {
      state.header.description = payload.title
    },
    resetHeaderDescription (state) {
      state.header.description = null
    }
  }
}

export default new Vuex.Store({
  modules: {
    settings: moduleSettings
  }
})
