import Vue from 'vue'
import Vuex from 'vuex'

import { getMapData } from './api/mapDataAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locationData: []
  },
  mutations: {
    updateLocationData (state, newData) {
      state.locationData = newData
    }
  },
  actions: {
    getLatestLocationData ({ commit }) {
      const newMapData = getMapData()
      commit('updateLocationData', newMapData)
    }
  }
})
