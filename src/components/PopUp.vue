<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn class="success" v-on="on"> Add new project </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Add a new project!</h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>

          <v-menu max-width="350px">
            <template v-slot:activator="{ on }">
              <v-text-field
                label="Due date"
                prepend-icon="date_range"
                v-on="on"
                :value="due"
                :rules="inputRules"
              >
              </v-text-field>
            </template>
            <v-date-picker v-model="due" full-width></v-date-picker>
          </v-menu>

          <v-btn class="success mx-0 mt-3" @click="submitForm" :loading="isLoading"
            >Add project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { setItem } from '@/fb';

export default {
  data() {
    return {
      title: '',
      content: '',
      due: '',
      dialog: false,
      isLoading: false,
      inputRules: [(v) => v.length >= 3 || 'Minimum length is three characters'],
    };
  },

  methods: {
    async submitForm() {
      if (this.$refs.form.validate()) {
        this.isLoading = true;

        const project = {
          title: this.title,
          content: this.content,
          due: this.due,
          person: 'Liza',
          status: 'ongoing',
        };

        setItem('projects', project);
        this.isLoading = false;
        this.dialog = false;
      }
    },
  },
};
</script>
