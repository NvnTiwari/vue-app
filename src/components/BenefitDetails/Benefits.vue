<template>
  <div>
    <v-app id="inspire">
      
      <!-- <Header />
      <Tabs /> -->
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">BenefitID</th>
              <th class="text-left">Benefit Category</th>     
              <th class="text-left">Description</th>
              <th class="text-left">Start Date</th>
              <th class="text-left">End Date</th>
              <th class="text-left">
                <EditBenefits />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in benefits" :key="item.benefitId">
              <td>{{ item.benefitId }}</td>
              <td>{{ item.category }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.startDate }}</td>
              <td>{{ item.endDate }}</td>
              <td>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn class="ma-2" outlined v-on='on' x-small fab color="primary">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span>Edit</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn class="ma-2" outlined v-on='on' x-small fab color="red">
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
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Header from "../Header.vue";
import EditBenefits from "./EditBenefits.vue";
import Tabs from "../Tabs.vue";

export default {
  components: {
    Header,
    EditBenefits
  },
  computed: mapGetters({
    benefits: "allBenefits"
  }),
  created() {
    this.$store.dispatch("getAllBenefits");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
