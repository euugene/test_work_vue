import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue: '',
    categories: [],
    elements: [],
    currentId: []
  },
  mutations: {
    SET_SEARCH_VALUE_TO_VUEX: (state, searchValue) => {
      state.searchValue = searchValue
    },
    SET_CURRENT_ID_TO_STATE: (state, currentId) => {
      state.currentId = currentId
    },
    SET_CATEGORIES_TO_STATE: (state, categories) => {
      state.categories = categories
    },
    SET_ELEMENTS_TO_STATE: (state, elements) => {
      state.elements = elements
    }
  },
  actions: {
    GET_VALUE_SEARCH ({ commit }, search) {
      commit('SET_ELEMENTS_TO_STATE', search)
    },
    GET_SEARCH_VALUE_TO_VUEX ({ commit }, value) {
      commit('SET_SEARCH_VALUE_TO_VUEX', value)
    },
    GET_ID_IN_STATE ({ commit }, id) {
      commit('SET_CURRENT_ID_TO_STATE', id)
    },
    GET_CATEGORIES_FROM_API ({ commit }) {
      return axios('http://6788c3e3d2a8.ngrok.io/v1/generic/category/', {
        method: 'GET'
      })
        .then((categories) => {
          commit('SET_CATEGORIES_TO_STATE', categories)
        })
        .catch((e) => {
          return e
        })
    },
    GET_ELEMENTS_FROM_API ({ commit }) {
      return axios('http://6788c3e3d2a8.ngrok.io/v1/market/product_list?category=' + this.state.currentId + ';searchkey=' + this.state.searchValue, {
        method: 'GET'
      })
        .then((elements) => {
          commit('SET_ELEMENTS_TO_STATE', elements)
          return elements
        })
        .catch((e) => {
          return e
        })
    }
  },
  modules: {
  },
  getters: {
    SEARCH_VALUE (state) {
      return state.searchValue
    },
    CATEGORIES (state) {
      return state.categories
    },
    ELEMENTS (state) {
      return state.elements
    }
  }
})
