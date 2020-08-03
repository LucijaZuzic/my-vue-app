<template>
    <div v-if="user">
        <h2>{{user.first_name | uppercase}} {{user.last_name.toUpperCase()}} Details</h2>
        <div><span>id: </span>{{user.id}}</div>
        <div>
            <label>first name:
            <input v-model="user.first_name" placeholder="first_name" />
            </label>
        </div>
        <div>
            <label>last name:
            <input v-model="user.last_name" placeholder="last_name" />
            </label>
        </div>
        <div>  
            <label>email:
            <input v-model="user.email" placeholder="email" />
            </label>
        </div>
        <div>
            <label>avatar: 
            <input v-model="user.avatar" placeholder="avatar" />
            </label>
        </div>
        <div>
            <img v-bind:src=user.avatar v-bind:alt=user.avatar />
        </div>
        <div>
            <button v-on:click="updateUser">save</button>
        </div>
        <div>
            <button v-on:click="deleteUser">delete</button>
        </div>
        <div>
            <button v-on:click="goBack" >go back</button>
        </div>
    </div>
</template>

<script>
import { users } from '../App.vue'
import { messages } from './Message.vue'
export default {
  name: 'UserDetails',
  data() {
    var i;
    var user;
    for (i = 0; i < users.length; i++) {
      if (users[i].id.toString() === this.$route.params.id.toString()) {
        user = {
          "id": users[i].id,
          "email": users[i].email,
          "first_name": users[i].first_name,
          "last_name": users[i].last_name,
          "avatar": users[i].avatar
        }        
        messages.push("UserService: fetched user id="+users[i].id);
        break;
      }
    }
    if (!user) {
      messages.push("UserService: getUser id="+this.$route.params.id+" failed: undefined");
    }
    return {
      user: user
    }
  },
  filters: {
    uppercase: function (value) {
      return value.toUpperCase()
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    deleteUser() {	
      var i;
      for (i = 0; i < users.length; i++) {
        if (users[i].id === this.user.id) {
          messages.push("UserService: deleted user id="+users[i].id);
          users.splice(i, 1);
          break;
        }
      }
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    updateUser() {	
      var i;
      for (i = 0; i < users.length; i++) {
        if (users[i].id === this.user.id) {
          users[i] = {
            "id": this.user.id,
            "email": this.user.email,
            "first_name": this.user.first_name,
            "last_name": this.user.last_name,
            "avatar": this.user.avatar
          }
          messages.push("UserService: updated user id="+users[i].id);
          break;
        }
      }
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    }
  },
  watch: {'$route.params.id': function () {window.location.reload();}}
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
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
</style>
