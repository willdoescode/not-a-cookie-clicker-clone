import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Set the global state
    points: 0,
    slowHelper: true,
    // When a helper is true it is actually disabled
    brainOnDrugs: true
  },
  mutations: {
    increment(state) {
      // Function that increments the global state and adds to localstorage
      state.points++
      localStorage.setItem('points', state.points)
    },
    decrement(state, { amount, name }) {
      // Function that subtracts from the global state and localstorage but also sets the helper that called the function to true
      state.points -= amount
      localStorage.setItem('points', state.points)
      state[name] = false
      localStorage.setItem(name, 'false')
    },
    setStorage(state) {
      // This function is called when you load the website
      // It checks if there are values in localStorage and if there are not then it sets them to the corresponding default value
      // If there is already a value in localstorage then it sets the global corresponding state to that value
      if (localStorage.getItem('points') === null) {
        localStorage.setItem('points', state.points)
        console.log({ points: state.points })
      } else {
        state.points = localStorage.getItem('points')
        console.log({ points: state.points })
      }
      if (localStorage.getItem('slowHelper') === null) {
        localStorage.setItem('slowHelper', 'true')
        console.log({ slowHelper: state.slowHelper })
      } else {
        state.slowHelper = (localStorage.getItem('slowHelper') === 'true')
        console.log({ slowHelper: state.slowHelper })
        if (state.slowHelper === false) {
          this.dispatch('interval', {
            speed: 3
          })
        }
      }
      if (localStorage.getItem('brainOnDrugs') === null) {
        localStorage.setItem('brainOnDrugs', 'true')
        console.log({ brainOnDrugs: state.brainOnDrugs })
      } else {
        state.brainOnDrugs = (localStorage.getItem('brainOnDrugs') === 'true')
        console.log({ brainOnDrugs: state.brainOnDrugs })
        if (state.brainOnDrugs === false) {
          this.dispatch('interval', {
            speed: -50
          })
        }
      }
    },
    resetAll(state) {
      // Reset all function for testing the site and debugging
      localStorage.clear()
      state.points = 0
      state.slowHelper = true
      state.fastHelper = true
    }
  },
  actions: {
    // Actions make it easy to manipulate global state from other files
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
       // Easy interval function to handle the helpers
       setInterval(() => {
        context.commit('increment')
      }, speed * 1000)
    }
  }
})
