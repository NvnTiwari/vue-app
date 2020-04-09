import benefitsAPI from '../../api/benefits'
import * as mutationType from '../mutation_types'

// initial state
const state = {
  all: [],
  msg: ''
}

// initial getters
const getters = {
  allBenefits: state => {
    return state.all
  },

  msg: state => {
    return state.msg
  }
}

// initial actions
const actions = {

  // get data from getBenefits API
  getAllBenefits ({ commit }) {
    benefitsAPI.getBenefits(benefit => {
      commit(mutationType.SHOW_ALL_BENEFITS, benefit)
    })
  },

  // Edit benefits
  editBenefits (context, benefitId) {
    console.log(benefitId)
  }
}

// initial mutation
const mutations = {
  [mutationType.SHOW_ALL_BENEFITS] (state, benefit) {
    state.all = benefit
  },

  getModalMessage (state, msg) {
    state.msg = msg
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
