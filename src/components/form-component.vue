<template>
  <v-form @submit.prevent="submitForm">
    <v-text-field v-model="name" label="Name" required></v-text-field>
    <v-text-field v-model="surname" label="Surname" required></v-text-field>
    <v-text-field v-model="email" label="Email" required></v-text-field>
    <v-text-field v-model="age" label="Age" type="number" required></v-text-field>
    <v-select
      v-model="favoriteColor"
      :items="colorOptions"
      label="Favorite Color"
      required
    ></v-select>
    <v-container fluid>
      <h3>Contact Preferences</h3>
      <v-checkbox v-for="(contactPreference, index) in contactPreferences" :key="index" v-model="contactPreference.selected" :label="contactPreference.value">
      </v-checkbox>
    </v-container>
    <div class="button-container"><v-btn type="submit" color="primary">Submit</v-btn></div>
  </v-form>
</template>

<script>

import { VCheckbox } from 'vuetify/lib/components';
import { v4 as uuidv4 } from 'uuid';

export default {
   components: {
    VCheckbox
  },
 data() {
  return {
    id: '',
    name: '',
    surname: '',
    email: '',
    age: null,
    favoriteColor: null,
    contactPreferences: [
      { value: 'Email', selected: false },
      { value: 'Phone Call', selected: false },
      { value: 'SMS', selected: false }
    ],
    colorOptions: ['red', 'green', 'blue', 'white', 'black']
  };
},
methods: {
  generateRandomId() {
    const randomId = uuidv4();
    return randomId;
  },
  getSelectedContactPreferences(contactPreferences) {
    const selectedPreferences = contactPreferences
      .filter(pref => pref.selected)
      .map(pref => pref.value);
    return selectedPreferences.join(', ');
  },
  submitForm() {
    const formData = {
      id: this.generateRandomId(), // Add the random ID to the object
      name: this.name,
      surname: this.surname,
      email: this.email,
      age: this.age,
      favoriteColor: this.favoriteColor,
      contactPreferences: this.getSelectedContactPreferences(this.contactPreferences)
    };
    this.$emit('add', formData);
    this.clearForm();
  },
    clearForm() {
      this.id = '';
      this.name = '';
      this.surname = '';
      this.email = '';
      this.age = null;
      this.favoriteColor = null;
      this.contactPreferences = [
        { value: 'Email', selected: false },
        { value: 'Phone Call', selected: false },
        { value: 'SMS', selected: false }
      ];
    }
  }
};
</script>

<style>
.button-container {
  display: flex;
  flex-direction: row;
  justify-content: end;
}
</style>
