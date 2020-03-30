import Vue from 'vue'
import Router from 'vue-router'
import Benefits from '../components/BenefitDetails/Benefits.vue'
import Pages from '../components/BenefitPages/BenefitPage.vue'
import BenefitCategory from '../components/BenefitCategories/Categories.vue'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://dev-741996.okta.com/oauth2/default',
  clientId: '0oa4set07KUWkP0xU4x6',
  redirectUri: 'http://localhost:{port}/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
})


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Benefits',
      component: Benefits
    },
    {
      path: '/pages',
      name: 'Pages',
      component: Pages
    },
    {
      path: '/categories',
      name: 'BenefitCategory',
      component: BenefitCategory
    }
  ]
})
