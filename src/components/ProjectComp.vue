<template>
  <div class="projects">
    <h1 class="subheading grey--text ml-5">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">{{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { getItems } from '@/fb';

export default defineComponent({
  name: 'ProjectComp',
  data() {
    return {
      myProjects: [],
    };
  },

  created() {
    this.myProjects = getItems('projects', 'person', 'Liza');
  },
});
</script>
