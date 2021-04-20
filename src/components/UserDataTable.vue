<template>
  <table >
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Location</th>
        <th>Age</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody v-if="records.length !== 0">
      <tr v-for="data in records" v-bind:key="data.id">
        <td>{{data.name}}</td>
        <td>{{data.email}}</td>
        <td>{{data.location}}</td>
        <td>{{data.age}}</td>
        <td>
          <div id="actions">
            <button type="button" @click="editRecord(data.id)">Edit</button>
            <button type="button" @click="deleteRecord(data.id)">Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td colspan="5" id="no-data">No Data Available</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UserDataTable',
  data: () => ({
    records: JSON.parse(localStorage.getItem('records'))
  }),
  methods: {
    deleteRecord(id) {
      const records = JSON.parse(localStorage.getItem('records'))
      const updatedRecords = records.filter((record) => record.id !== id)
      localStorage.setItem('records', JSON.stringify(updatedRecords))
      window.location.reload()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#actions {
  display: flex;
  justify-content: flex-end;
}
#actions > button:first-child {
  margin-right: 10px;
}
table {
  width: 95%;
  margin: 20px auto;  
  border-collapse: collapse;
  font-family: arial, sans-serif;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

#no-data {
  text-align: center;
}
</style>
