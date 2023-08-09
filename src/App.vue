<template>
  <div id="app">
    <h1 class="title">Data Management App</h1>
    <Form @add="addData" />
    <div class="btn-export" > <v-btn color="primary" v-if="dataList.length > 0"  @click="exportData">Export JSON</v-btn> </div>
    <Table :dataList="dataList" @delete="deleteData" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Form from './components/form-component.vue';
import Table from './components/table-component.vue';

export default {
  components: {
    Form,
    Table
  },
  setup() {
    const dataList = ref([]);

    function addData(newData) {

      dataList.value.push(newData);
    }

    function deleteData(id) {
      const index = dataList.value.findIndex(item => item.id === id);
      if (index !== -1) {
        dataList.value.splice(index, 1);
      }
    }

    function exportData() {
      const jsonData = JSON.stringify(dataList.value, null, 2);
      alert(jsonData);
    }

    return {
      dataList,
      addData,
      deleteData,
      exportData
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

Form {
    width: 36%;
    padding: 37px;
    margin: 0 auto;
    margin-bottom: 45px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.title {
  margin-bottom: 45px;
}

.v-input__details {
  display: none;
}

.btn-export {
  display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    padding-right: 11%;
}
</style>
