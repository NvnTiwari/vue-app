<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
      <v-card-title class="headline">{{message}}</v-card-title>
        <!-- <v-btn class="inline" icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn> -->
        <v-card-actions>
          <v-btn class="error" text @click="cancelConfirmBox">Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn class="primary" text @click="onClick">OK</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { eventBus } from '../../main'

export default {
  props: {
    message: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      dialog: true
    }
  },
  methods: {
    cancelConfirmBox () {
      eventBus.$emit('cancelConfirmBox', false)
    }
  }
}
</script>

<style scoped>
.v-card__actions {
    border-top: 1px solid #ddd;
}
span {
    margin: 20px;
}
</style>
