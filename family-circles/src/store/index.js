
import Vue from 'vue'
import Vuex from 'vuex'
import {pointsModule} from './modules/points.js'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pointsModule
  },
})