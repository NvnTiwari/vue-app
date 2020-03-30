import benefitsAPI from '../../api/benefits'
import * as mutationType from '../mutation_types'

// initial state
const state = {
  all: []
}

// initial getters
const getters = {
  allBenefits: state => {
    return state.all
  }
}

// initial actions
const actions = {

  // get data from getBenefits API
  getAllBenefits({ commit }) {
      benefitsAPI.getBenefits(benefit => {
        commit(mutationType.SHOW_ALL_BENEFITS, benefit)
      })
  }
}

// initial mutation
const mutations = {
  [mutationType.SHOW_ALL_BENEFITS](state, benefit) {
    state.all = benefit
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}