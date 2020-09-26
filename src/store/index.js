import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    points: 0
  },
  mutations: {
    increment (state) {
      if (localStorage.getItem('points') === null) {
        localStorage.setItem('points', state.points)
        console.log(state.points)
      } else {
        state.points = localStorage.getItem('points')
        state.points++
        localStorage.setItem('points', state.points)
        console.log(state.points)
      }
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  modules: {
  }
})
