import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import App from './../App'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    elements: [],
    currentId: []
  },
  mutations: {
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
    GET_ID_IN_STATE ({ commit }, id) {
      // console.log(id)
      // return (id) => {
      commit('SET_CURRENT_ID_TO_STATE', id)
      // console.log(this.state.currentId)
      // }
    },
    GET_CATEGORIES_FROM_API ({ commit }, per) {
      return axios('http://6788c3e3d2a8.ngrok.io/v1/generic/category/', {
        method: 'GET'
      })
        .then((categories) => {
          commit('SET_CATEGORIES_TO_STATE', categories)
          // console.log(per)
          return categories
        })
        .catch((e) => {
          console.log(e)
          return e
        })
    },
    GET_ELEMENTS_FROM_API ({ commit }) {
      // debugger
      console.log(this.state.currentId)
      return axios('http://6788c3e3d2a8.ngrok.io/v1/market/product_list?category=' + this.state.currentId, {
        method: 'GET'
      })
        .then((elements) => {
          commit('SET_ELEMENTS_TO_STATE', elements)
          // console.log(elements)
          return elements
        })
        .catch((e) => {
          console.log(e)
          return e
        })
    }
  },
  modules: {
  },
  getters: {
    CATEGORIES (state) {
      return state.categories
    },
    ELEMENTS (state) {
      return state.elements
    }
  }
})
