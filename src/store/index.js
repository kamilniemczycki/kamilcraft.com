import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleSettings = {
  state: {
    header: {
      title: null,
      description: null
    },
    categories: [],
    projects: []
  },
  getters: {
    getHeader (state) {
      return state.header
    },
    getCategories (state) {
      return state.categories
    },
    getProjects (state) {
      return state.projects
    }
  },
  actions: {
    fetchProjects (store) {
      return fetch('/api/projects.json')
        .then(response => response.json())
        .then(data => {
          store.commit('setProjects', data)
          return store.getters.getProjects
        })
    }
  },
  mutations: {
    setCategories: (state, array = []) => {
      state.categories = array
    },
    setProjects: (state, array = []) => {
      state.projects = array
    },
    setHeader: (state, text) => {
      state.header = {
        title: text.title ?? null,
        description: text.description ?? null
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
