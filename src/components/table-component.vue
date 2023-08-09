<template>
<h2>User Data</h2>
     <v-dialog v-model="showExportDialog" max-width="600">
      <v-card>
        <v-card-title>
          <span class="headline">Export Data as JSON</span>
        </v-card-title>
        <v-card-text>
          <pre>{{ jsonData }}</pre>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="showExportDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  
  <div class="table">
    <v-data-table
      :headers="headers"
      :items="dataList"
      item-key="id"
      class="elevation-1"
      v-if="dataList.length > 0"
      hide-default-footer
    >
     <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <v-icon @click="confirmDelete(item.value)">mdi-delete</v-icon>
      </template>
    </v-data-table>
    <div v-else>
      <span>No data available</span>
    </div>
  </div>
</template>

<script>
import { VDataTable } from 'vuetify/labs/VDataTable'

export default {
   components: {
    VDataTable
    },
  props: {
    dataList: Array
  },
  data() {
    return {
      headers: [
        {
          title: 'Name',
          align: 'center',
          sortable: false,
          key: 'name',
        },
        {
          title: 'Surname',
          align: 'center',
          sortable: false,
          key: 'surname',
        },
        {
          title: 'Email',
          align: 'center',
          sortable: false,
          key: 'email',
        },
        {
          title: 'Age',
          align: 'center',
          sortable: false,
          key: 'age',
        },
        {
          title: 'Favorite Color',
          align: 'center',
          sortable: false,
          key: 'favoriteColor',
        },
        {
          title: 'Contact Preferences',
          align: 'center',
          sortable: false,
          key: 'contactPreferences'
        },
        {
          title: 'Actions',
          align: 'center',
          sortable: false,
          key: 'actions',
        }
      ],
      showExportDialog: false
    };
  },
  computed: {
    jsonData() {
      return JSON.stringify(this.dataList, null, 2);
    }
  },
  methods: {
    confirmDelete(id) {
      if (confirm('Are you sure you want to delete this entry?')) {
        this.$emit('delete', id);
      }
    }
  }
};
</script>

<style>
  .table {
    margin: 0 auto;
    width: 80%;
    margin-bottom: 6%;
  }
</style>
