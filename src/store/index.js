import { createStore } from 'vuex';

const apiURL = import.meta.env.VITE_APP_API_URL;

export const store = createStore({
  state: {
    categories: [],
    projects: []
  },
  getters: {
    getCategories (state) {
      return state.categories;
    },
    getProjects (state) {
      return state.projects;
    }
  },
  actions: {
    fetchProjects (store) {
      return fetch(apiURL + '/projects')
        .then(response => response.json())
        .then(data => {
          store.commit('setProjects', data)
          return store.getters.getProjects
        });
    },
    fetchCategories (store) {
      return fetch(apiURL + '/categories')
        .then(response => response.json())
        .then(data => {
          store.commit('setCategories', data)
          return store.getters.getCategories
        });
    }
  },
  mutations: {
    setCategories: (state, array = []) => {
      state.categories = array
    },
    setProjects: (state, array = []) => {
      state.projects = array
    },
  }
})
