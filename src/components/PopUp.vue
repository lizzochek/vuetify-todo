<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn class="success" v-on="on"> Add new project </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Add a new project!</h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>

          <v-menu max-width="350px">
            <template v-slot:activator="{ on }">
              <v-text-field label="Due date" prepend-icon="date_range" v-on="on" :value="due">
              </v-text-field>
            </template>
            <v-date-picker v-model="due" full-width></v-date-picker>
          </v-menu>

          <v-btn class="success mx-0 mt-3" @click="submitForm">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
    };
  },

  methods: {
    submitForm() {
      console.log(this.content);
    },
  },
};
</script>
