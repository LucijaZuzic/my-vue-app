<template>
<div>
    <div>
        <h4>Email Search</h4>
        <input class="search-box" v-model="term" v-on:keyup="search(term)"/>
    </div>
    <ul class="search-result">
        <li v-for="user in results" :key="user.id">
            <router-link v-bind:to="{ name: 'detail', params: { id: user.id }}">
                {{user.email}}
            </router-link>
        </li>
    </ul>
    <button v-on:click="goBack">go back</button>
</div>
</template>

<script>
import { users } from '../App.vue'
import { messages } from './Message.vue'

export default {
  name: 'Email',
  components: {
    
  },
  data() {
      return {
        term: "",
        results: []
      }
  },
  methods: {
    goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    search(term) {		   
        this.results = users.filter(function(user) {return user.email.toLowerCase().includes(term.toLowerCase());})
        if (term === "") {
            this.results = [];
        }
        if (this.results.length === 0) {
          messages.push(`UserService: no users matching "${term}"`);
        } else {
          messages.push(`UserService: found users matching "${term}"`);
        }
    }
  }

}
</script>

<style scoped>
.search-result li {
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width: 195px;
  height: 16px;
  padding: 5px;
  background-color: white;
  cursor: pointer;
  list-style-type: none;
}

.search-result li:hover {
  background-color: #607D8B;
}

.search-result li a {
  color: #888;
  display: block;
  text-decoration: none;
}

.search-result li a:hover {
  color: white;
}
.search-result li a:active {
  color: white;
}
.search-box {
  width: 200px;
  height: 20px;
}


ul.search-result {
  margin-top: 0;
  padding-left: 0;
}


h2 {
  font-size: 2em;
  margin-top: 0;
  padding-top: 0;
}
</style>