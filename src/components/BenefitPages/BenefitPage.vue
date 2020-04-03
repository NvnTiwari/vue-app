<template>
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Page ID</th>
          <th class="text-left">Page Type</th>
          <th class="text-left">Number of Banners</th>
          <th><Page /></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in pages" :key="item.pageID">
          <td>{{ item.pageID }}</td>
          <td>{{ item.pageType }}</td>
          <td>{{ item.numberOfBanners }}</td>
          <td>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn class="ma-2" outlined v-on="on" x-small fab color="primary">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn class="ma-2" outlined v-on="on" x-small fab color="red">
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </template>
              <span>Delete</span>
            </v-tooltip>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import Page from './PageEdit'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: mapGetters({
    pages: 'allPages'
  }),
  components: {
    Page
  },
  created () {
    this.$store.dispatch('getAllBenefitPages')
  }
}
</script>
