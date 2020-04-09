<template>
  <v-app-bar color="white" app dense fixed>
    <v-toolbar-title class="levi-header">Loyalty Benefit Admin Tool</v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab to="/" v-if="authenticated">Benefit Details</v-tab>
        <v-tab to="/pages" v-if="authenticated">Pages</v-tab>
        <v-tab to="/categories" v-if="authenticated">Categories</v-tab>
        <v-tab href='#' @click.prevent="login" v-if="!authenticated">Login</v-tab>
        <v-tab href='#' @click.prevent="logout" v-else>Logout</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data: function () {
    return { authenticated: false }
  },
  created () { this.isAuthenticated() },
  watch: {
    // Everytime the route changes, check for auth status
    '$route': 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    login () {
      this.$auth.loginRedirect('/')
    },
    async logout () {
      await this.$auth.logout()
      await this.isAuthenticated()
      this.$auth.loginRedirect('/')
    }
  }
}
</script>

<style scoped>
  .levi-header, .v-tab {
    font-weight: bold;
    font-family: Interstate-Regular,sans-serif;
    text-transform: uppercase;
    color:#C41230;
  }
</style>
