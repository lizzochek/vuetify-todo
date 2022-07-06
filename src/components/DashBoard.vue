<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-card flat class="pa-3 ma-2" v-for="project in projects" :key="project.title">
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

export default defineComponent({
  name: 'DashBoard',
  data() {
    return {
      projects: [
        {
          title: 'Design a new website',
          person: 'Liza',
          due: '1st Jan 2023',
          status: 'ongoing',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
        {
          title: 'Code up the homepage',
          person: 'Anna',
          due: '10th Jan 2023',
          status: 'complete',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
        {
          title: 'Design video thumbnails',
          person: 'Sam',
          due: '20th Dec 2023',
          status: 'complete',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
        {
          title: 'Create a community forum',
          person: 'John',
          due: '20th Oct 2020',
          status: 'overdue',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
      ],
    };
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
