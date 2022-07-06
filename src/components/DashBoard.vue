<template>
  <div class="dashboard">
    <h1 class="subheading text-grey">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 md6>
          <v-btn outlined block class="primary">1</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DashBoard',
});
</script>
