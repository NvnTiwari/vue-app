<template>
  <v-row justify="center">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn class="ma-2" @click="dialog = true" outlined v-on="on" small fab color="indigo">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>Add</span>
    </v-tooltip>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card tile>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-title>
          <span class="headline">Edit Page</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Page ID*" clearable required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Page Type*" clearable required></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-simple-table fixed-header>
                  <template>
                    <thead>
                      <tr>
                        <th class="text-left">Banner ID</th>
                        <th class="text-left">Banner Priority</th>
                        <th class="text-left">Size</th>
                        <th>
                          <v-tooltip right>
                            <template v-slot:activator="{ on }">
                              <v-btn
                                class="ma-2"
                                @click="dialog2 = !dialog2"
                                outlined
                                v-on="on"
                                small
                                fab
                                color="indigo"
                              >
                                <v-icon>mdi-plus</v-icon>
                              </v-btn>
                            </template>
                            ADD
                          </v-tooltip>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.numbers }}</td>
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
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select
                  :items="['Shipping', 'Discount', 'Free', 'ABS']"
                  label="Benefit Category*"
                  clearable
                  required
                ></v-select>
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

    <v-dialog v-model="dialog2" max-width="500px">
      <v-card>
        <v-card-title>Edit Banner Id</v-card-title>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Banner ID"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-select
                  :items="['1', '2', '3', '4']"
                  label="Priority*"
                  clearable
                  required
                ></v-select>
              </v-col>

              <v-col cols="12" md="4">
                <v-select
                  :items="['LARGE', 'SMALL']"
                  label="Size*"
                  clearable
                  required
                ></v-select>

              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-card-actions>
          <v-btn class="error" text @click="dialog2 = false">Close</v-btn>
          <v-btn class="primary" text @click="dialog2 = false">Save</v-btn>
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
      dialog2: false,
      desserts: [
        {
          name: "Banner 1",
          calories: 1,
          numbers: "LARGE"
        },
        {
          name: "Banner 2",
          calories: 2,
          numbers: "LARGE"
        }
      ]
    };
  }
};
</script>