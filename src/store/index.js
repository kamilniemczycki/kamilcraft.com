import { createStore } from 'vuex'

export const store = createStore({
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
      return fetch(process.env.VUE_APP_API_URL + '/projects')
        .then(response => response.json())
        .then(data => {
          store.commit('setProjects', data)
          return store.getters.getProjects
        })
    },
    fetchCategories (store) {
      return fetch(process.env.VUE_APP_API_URL + '/categories')
        .then(response => response.json())
        .then(data => {
          store.commit('setCategories', data)
          return store.getters.getCategories
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
})
