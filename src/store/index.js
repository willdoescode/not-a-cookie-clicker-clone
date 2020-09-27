import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    points: 0,
    slowHelper: true,
    fastHelper: true
  },
  mutations: {
    increment(state) {
      state.points++
      localStorage.setItem('points', state.points)
    },
    decrement(state, { amount, name }) {
      state.points -= amount
      localStorage.setItem('points', state.points)
      state[name] = false
    },
    setStorage(state) {
      if (localStorage.getItem('points') === null) {
        localStorage.setItem('points', state.points)
      } else {
        state.points = localStorage.getItem('points')
      }
    },
    resetAll(state) {
      localStorage.clear()
      state.points = 0
      state.slowHelper = true
      state.fastHelper = true
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    setStorage(context) {
      context.commit('setStorage')
    },
    resetAll(context) {
      context.commit('resetAll')
    },
  }
})
