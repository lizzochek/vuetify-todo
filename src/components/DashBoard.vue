<template>
  <div class="dashboard">
    <h1 class="subheading grey--text ml-5">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortByParam('title')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">by title</span>
            </v-btn>
          </template>
          <span>Sort projects by title</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortByParam('person')" v-on="on">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">by person</span>
            </v-btn>
          </template>
          <span>Sort projects by author</span>
        </v-tooltip>
      </v-layout>

      <v-card text class="pa-3 ma-2" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due date</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div>
              <v-chip small :class="`${project.status} white--text caption my-2 ml-5`">
                {{ project.status }}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { getItems } from '@/fb';

export default defineComponent({
  name: 'DashBoard',
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    sortByParam(param) {
      this.projects.sort((a, b) => (a[param] < b[param] ? -1 : 1));
    },
  },
  created() {
    this.projects = getItems('projects');
  },
});
</script>

<style>
.complete {
  border-left: 4px solid #3cd1c2;
}

.ongoing {
  border-left: 4px solid orange;
}

.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2 !important;
}

.v-chip.ongoing {
  background: orange !important;
}

.v-chip.overdue {
  background: tomato !important;
}
</style>
