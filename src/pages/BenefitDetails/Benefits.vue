<template>
  <div>
    <div v-if="showConfirmBox">
      <ConfirmBox message="Do you wish to delete the benefit?" :onClick="closeConfirmBox"/>
    </div>
    <v-data-table :headers="headers" :items="benefits" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <h2>View Benefit Details</h2>
          <v-spacer></v-spacer>
          <EditBenefits :item="editedItem" :dialog="dialog" />
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              class="ma-2"
              @click="editItem(item)"
              outlined
              v-on="on"
              x-small
              fab
              color="primary"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </template>
          <span>Edit</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              class="ma-2"
              @click="deleteItem(item)"
              outlined
              v-on="on"
              x-small
              fab
              color="red"
            >
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
          </template>
          <span>Delete</span>
        </v-tooltip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { eventBus } from '../../main'
// import Header from '../Header.vue'
import EditBenefits from './EditBenefits.vue'
import ConfirmBox from '../../components/common/ConfirmDialog.vue'

export default {
  components: {
    EditBenefits,
    ConfirmBox
  },
  data () {
    return {
      item: null,
      isLoading: false,
      dialog: false,
      showConfirmBox: false,
      editedIndex: -1,
      editedItem: {},
      deletedIndex: -1,
      headers: [
        {
          text: 'BenefitID',
          value: 'benefitId'
        },
        { text: 'Benefit Category', value: 'category' },
        { text: 'Description', value: 'description' },
        { text: 'Start Date', value: 'startDate' },
        { text: 'End Date', value: 'endDate' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.benefits.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.showConfirmBox = true
      const index = this.benefits.indexOf(item)
      this.deletedIndex = Object.assign({}, index)
    },

    closeConfirmBox () {
      this.showConfirmBox = false
      this.benefits.splice(this.deletedIndex, 1)
    }
  },
  computed: mapGetters({
    benefits: 'allBenefits'
  }),
  created () {
    this.isLoading = true
    this.$store.dispatch('getAllBenefits')
    if (this.benefits.length > 0) {
      this.isLoading = false
    }
    eventBus.$on('cancelConfirmBox', (data) => {
      this.showConfirmBox = data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>