<template>
  <v-app id="inspire">
    <Tabs />
    <router-view/>
    
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

</style>
