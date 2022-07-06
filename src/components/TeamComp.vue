<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card text class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2 ml-5">
                <img :src="person.avatar" alt="avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div></v-card-text
            >
            <v-card-actions text color="grey" class="justify-center">
              <v-icon small left>message</v-icon>
              <span class="text-uppercase grey--text">message</span></v-card-actions
            >
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TeamComp',
  data() {
    return {
      team: [
        { name: 'Liza', role: 'Web developer', avatar: 'avatar-1.png' },
        { name: 'Anna', role: 'Graphic designer', avatar: 'avatar-2.png' },
        { name: 'Sam', role: 'Web developer', avatar: 'avatar-4.png' },
        { name: 'John', role: 'Social media manager', avatar: 'avatar-5.png' },
        { name: 'Marina', role: 'Sales manager', avatar: 'avatar-3.png' },
      ],
    };
  },
});
</script>
