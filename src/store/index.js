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
          console.log('hit')
          this.dispatch('interval', {
            speed: 1
          })
        }
      }
      if (localStorage.getItem('fastHelper') === null) {
        localStorage.setItem('fastHelper', 'true')
      } else {
        state.fastHelper = (localStorage.getItem('fastHelper') === 'true')
        if (state.fastHelper === false) {
          this.dispatch('interval', {
            speed: 0.5
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
