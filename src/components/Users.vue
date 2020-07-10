<template>
  <div>
    <h2>All Users</h2>
    <ul class = "users">
      <li v-for="user in users" :key = "user.id">
        <router-link  v-bind:to="{ name: 'detail', params: { id: user.id }}"><span class="badge">{{user.id}}</span> {{user.first_name}} {{user.last_name}}</router-link>
        <button class="delete" title="delete user" v-on:click="deleteUser(user.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { users } from '../App.vue'
export default {
  name: 'Users',
  data() {
      this.users = users;
      return this.users[0];
  },
  methods: {
    deleteUser(id) {	
      var i;
      for (i = 0; i < users.length; i++) {
        if (users[i].id === id) {
          users.splice(i, 1);
          break;
        }
      }
      this.$forceUpdate();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.users li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.users li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
.users li.selected {
  background-color: #CFD8DC;
  color: white;
}
.users li.selected:hover {
  background-color: #BBD8DC;
  color: white;
}
.users .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color:#405061;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
</style>
