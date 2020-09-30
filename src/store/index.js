import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    points: 0,
    slowHelper: true,
    brainOnDrugs: true
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
      localStorage.setItem(name, 'false')
    },
    setStorage(state) {
      if (localStorage.getItem('points') === null) {
        localStorage.setItem('points', state.points)
      } else {
        state.points = localStorage.getItem('points')
      }
      if (localStorage.getItem('slowHelper') === null) {
        localStorage.setItem('slowHelper', 'true')
      } else {
        state.slowHelper = (localStorage.getItem('slowHelper') === 'true')
        if (state.slowHelper === false) {
          this.dispatch('interval', {
            speed: 3
          })
        }
      }
      if (localStorage.getItem('brainOnDrugs') === null) {
        localStorage.setItem('brainOnDrugs', 'true')
      } else {
        state.brainOnDrugs = (localStorage.getItem('brainOnDrugs') === 'true')
        if (state.brainOnDrugs === false) {
          this.dispatch('interval', {
            speed: -50
          })
        }
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
    interval(context, { speed }) {
       setInterval(() => {
        context.commit('increment')
      }, speed * 1000)
    }
  }
})
