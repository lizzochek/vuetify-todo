<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Great! You added a new project!</span>
      <v-btn text color="white" @click="snackbar = false" class="ml-3">Close</v-btn></v-snackbar
    >

    <v-app-bar app>
      <v-app-bar-nav-icon color="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- Title -->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>List</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Dropdown menu -->

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text color="grey" v-on="on">
            <v-icon>expand_more</v-icon>
            <span text color="grey">Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Sign out section -->
      <v-btn text color="grey">
        <span>Sign out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-layout column align-center justify-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="avatar-1.png" alt="my avatar" />
          </v-avatar>
          <p class="subheading mt-1 text-center" center>Liza</p>
        </v-flex>

        <!-- Popup -->
        <v-flex class="mt-4 mb-3">
          <PopUp @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list class="bg-deep-purple">
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import PopUp from './PopUp.vue';

export default {
  components: { PopUp },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder-heart', text: 'My projects', route: '/projects' },
        { icon: 'mdi-account-group', text: 'Team', route: '/team' },
      ],
      snackbar: false,
    };
  },
};
</script>
