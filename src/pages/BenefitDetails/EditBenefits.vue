<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-title>
        <span class="headline">{{msg}}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Benefit ID*"
                v-model="benefitId"
                :rules="[v => !!v || 'BenefitId is required']"
                clearable
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-select
                :items="['Base', 'Base_SUB', 'Base_A', 'Base_B']"
                label="Benefit Type*"
                v-model="benefitType"
                :rules="[v => !!v || 'Type is required']"
                clearable
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-select
                :items="['Shipping', 'Discount', 'Free', 'ABS']"
                label="Benefit Category*"
                :rules="[v => !!v || 'Benefir Category is required']"
                clearable
                v-model="category"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Benefit Description" v-model="description" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="startDate"
                    label="Start Date"
                    :rules="[v => !!v || 'Type is required']"
                    prepend-icon="mdi-calendar-month"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="startDate"
                  @input="menu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="endDate"
                    label="End Date"
                    prepend-icon="mdi-calendar-month"
                    readonly
                    clearable
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="endDate"
                  :disabled="!startDate"
                  :max="startDate"
                  @input="menu1 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Benefit Class (for MOSAIC use)"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field label="Hybris Promo Group" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Raymark Promo Group" required></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="error" text @click="close">Cancel</v-btn>
        <v-btn
          :disabled="!valid"
          @click="close"
          color="success"
          class="mr-4"
        >
          Save
        </v-btn>
      </v-card-actions>
        </v-form>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['dialog', 'item'],
  data () {
    return {
      valid: true,
      startDate: null,
      endDate: null,
      benefitId: '',
      benefitIdRules: [
        v => !!v || 'BenefitId is required'
      ],
      benefitType: '',
      category: '',
      description: '',
      menu: false,
      modal: false,
      menu1: false
    }
  },
  methods: {
    close () {
      this.$emit('benefit-dialog', false)
    },

    save () {
      this.close()
    }
  },
  computed: {
    ...mapGetters([
      'msg'
    ])
  }
}
</script>
