<template>
  <v-app id="inspire">
    <Tabs />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Tabs from './components/Tabs.vue'
export default {
  components: {
    Tabs
  }
}
</script>

<style>
  * {
    font-family: Interstate-Regular,Sans-serif
  }
  h2 {
    color: #333;
  }
</style>
