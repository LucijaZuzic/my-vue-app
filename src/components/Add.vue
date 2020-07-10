<template>
    <div>
        <h2>Add User</h2>
        <div>
            <label>User first name:
            <input v-model="user.first_name" />
            </label>
        </div>
        <div>
            <label>User last name:
            <input v-model="user.last_name" />
            </label>
        </div>
        <div>  
            <label>User email:
            <input v-model="user.email" />
            </label>
        </div>
        <div>
            <label>User avatar: 
            <input v-model="user.avatar" />
            </label>
        </div>
        <div>
            <button v-on:click="addUser">add</button>
        </div>
    </div>
</template>

<script>
import { users } from '../App.vue'

export default {
  name: 'Add',
  data() {
      this.user = {
        "id": -1,
        "email": "",
        "first_name": "",
        "last_name": "",
        "avatar": ""
      }
      return this.user;
  },
  methods: {
    addUser() {	
      if (this.user.first_name !== "" && this.user.last_name !== "" &&  this.user.email !== "" && this.user.avatar !== "") {
        this.user.id = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
        users.push(this.user);
      }
      this.user  = {
        "id": -1,
        "email": "",
        "first_name": "",
        "last_name": "",
        "avatar": ""
      };
      this.$forceUpdate();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  display: inline-block;
  width: 10em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
}


input {
  height: 2em;
  width: 35em;
  font-size: 1em;
  padding-left: .4em;
}
</style>
