<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template #activator="{ on: dialog }">
        <v-tooltip left>
          <template #activator="{ on: tooltip }">
            <v-btn class="ma-2" v-on="{ ...tooltip, ...dialog }" outlined small fab color="indigo">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <span>Add Benefits</span>
        </v-tooltip>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Benefit ID*" clearable required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select
                  :items="['Base', 'Base_SUB', 'Base_A', 'Base_B']"
                  label="Benefit Type*"
                  clearable
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select
                  :items="['Shipping', 'Discount', 'Free', 'ABS']"
                  label="Benefit Category*"
                  clearable
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Benefit Description" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="startDate"
                      label="Start Date"
                      prepend-icon="mdi-calendar-month"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="startDate" @input="menu = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="endDate"
                      label="End Date"
                      prepend-icon="mdi-calendar-month"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="endDate" @input="menu1 = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Benefit Class (for MOSAIC use)" required></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field label="Hybris Promo Group" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Raymark Promo Group" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="error" text @click="dialog = false">Close</v-btn>
          <v-btn class="primary" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      startDate: null,
      endDate: null,
      menu: false,
      modal: false,
      menu1: false
    };
  }
};
</script>