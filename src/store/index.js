import Vue from 'vue'
import Vuex from 'vuex'

import benefits from './modules/benefits'
import pages from './modules/benefitPages'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    benefits,
    pages
  }
})
