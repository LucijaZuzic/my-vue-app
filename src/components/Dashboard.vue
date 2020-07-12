<template>
  <div>
    <h3>Top 5 Users</h3>
    <div class = "grid grid-pad">
        <router-link v-for="user in users.slice(0,5)" v-bind:to="{ name: 'detail', params: { id: user.id }}" :key = "user.id" class="col-1-5">
            <div class="module user">
                <h4>{{user.first_name}} {{user.last_name}}</h4>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
import { users } from '../App.vue'
import { messages } from './Message.vue'
export default {
  name: 'Dashboard',
  data() {
      messages.push("UserService: fetched users");
      return {
        users: users
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[class*='col-'] {
  float: left;
  padding-right: 20px;
  padding-bottom: 20px;
}
[class*='col-']:last-of-type {
  padding-right: 0;
}
a {
  text-decoration: none;
}
*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
h3 {
  text-align: center;
  margin-bottom: 0;
}
h4 {
  position: relative;
}
.grid {
  margin: 0;
}
.col-1-5 {
  width: 20%;
}
.module {
  padding: 20px;
  text-align: center;
  color: #eee;
  max-height: 120px;
  min-width: 120px;
  background-color: #3f525c;
  border-radius: 2px;
}
.module:hover {
  background-color: #eee;
  cursor: pointer;
  color: #607d8b;
}
.grid-pad {
  padding: 10px 0;
}
.grid-pad > [class*='col-']:last-of-type {
  padding-right: 20px;
}
@media (max-width: 600px) {
  .module {
    font-size: 10px;
    max-height: 75px; }
}
@media (max-width: 1024px) {
  .grid {
    margin: 0;
  }
  .module {
    min-width: 60px;
  }
}
</style>
