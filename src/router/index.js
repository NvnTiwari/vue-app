import Vue from 'vue'
import Router from 'vue-router'
import Benefits from '../components/BenefitDetails/Benefits.vue'
import Pages from '../components/BenefitPages/BenefitPage.vue'
import BenefitCategory from '../components/BenefitCategories/Categories.vue'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://dev-241799.okta.com',
  clientId: '0oa53h98hHNjqmp5z4x6',
  redirectUri: 'http://localhost:8080/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
})

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Benefits',
      component: Benefits,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/pages',
      name: 'Pages',
      component: Pages,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/categories',
      name: 'BenefitCategory',
      component: BenefitCategory,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    }
  ],
  mode: 'history'
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
