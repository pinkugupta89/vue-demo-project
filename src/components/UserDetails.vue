<template>
  <div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Father Name</th>
          <th scope="col">Mobile</th>
        </tr>
      </thead>
      <tbody v-for="item of userDetails" v-bind:key="item.no">
        <tr>
          <th scope="row">{{item.emp_id}}</th>
          <td>{{item.emp_name}}</td>
          <td>{{item.emp_last_name}}</td>
          <td>{{item.emp_fname}}</td>
          <td>{{item.emp_mobile}}</td>
        
          <td><button type="button" class="btn btn-outline-success" @click="editRecord(item.emp_id)">Edit</button>
        <button type="button" class="btn btn-outline-danger" @click="deleteRecord(item.emp_id)">Delete</button></td>
          </tr>
        
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      userDetails: [
         {
            "emp_id": Number,
            "emp_name": String,
            "emp_last_name": String,
            "emp_fname": String,
            "emp_mobile": String
        },
      ]
    };
  },
  methods: {
    test: function() {
      return "Hello...";
    },
    editRecord:function(emp_id){
        alert('In editRecord '+emp_id)
    },
    deleteRecord:function(emp_id){
        alert('In deleteRecord '+emp_id)
    }
  },
  created: function() {
    axios
      .get("http://localhost:9090/v1/emp/all_emp",{headers:{"Content-Type":"application/json",'X-App-ID':"postman"},data:null})
      .then(response => {
        this.userDetails = response.data.content;
      })
      .catch(error => {
        alert(error);
      });
  }
};
</script>