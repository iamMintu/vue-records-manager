<template>
  <Header />
  <AddRecordDialog />
  <UserDataTable />
</template>

<script>
import Header from './components/Header'
import AddRecordDialog from './components/AddRecordDialog'
import UserDataTable from './components/UserDataTable.vue'

export default {
  name: 'App',
  components: {
    Header,
    AddRecordDialog,
    UserDataTable
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
