import * as mutationType from '../mutation_types'
import pageApi from '../../api/pages'

const state = {
  allPages: []
}

const getters = {
  allPages: state => {
    return state.allPages
  }
}

const actions = {
  getAllBenefitPages ({commit}) {
    pageApi.getAllPages(page => {
      commit(mutationType.SHOW_ALL_PAGES, page)
    })
  }
}

const mutations = {
  [mutationType.SHOW_ALL_PAGES](state, page) {
    state.allPages = page
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}