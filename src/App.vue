<template>
  <div>
    <h1>List of Users</h1>
    <nav>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/dashboard">Top 5 Users</router-link>
      <router-link to="/users">All Users</router-link>
      <router-link to="/add">Add User</router-link>
      <router-link to="/user-search">Search User</router-link>
    </nav>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
    
  </div> 
</template>

<script>

const users = [
		{
			id: 1,
			email: "george.bluth@reqres.in",
			first_name: "George",
			last_name: "Bluth",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
		},
			{
			id: 2,
			email: "janet.weaver@reqres.in",
			first_name: "Janet",
			last_name: "Weaver",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
		},
			{
			id: 3,
			email: "emma.wong@reqres.in",
			first_name: "Emma",
			last_name: "Wong",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
		},
			{
			id: 4,
			email: "eve.holt@reqres.in",
			first_name: "Eve",
			last_name: "Holt",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
		},
			{
			id: 5,
			email: "charles.morris@reqres.in",
			first_name: "Charles",
			last_name: "Morris",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
		},
			{
			id: 6,
			email: "tracey.ramos@reqres.in",
			first_name: "Tracey",
			last_name: "Ramos",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
		},
		{
			"id": 7,
			"email": "michael.lawson@reqres.in",
			"first_name": "Michael",
			"last_name": "Lawson",
			"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
    }
]

export default {
  name: 'App',
  components: {
    
  },
  data() {
      this.user = users[0];
      this.users = users;
      return this.user;
  }
}

export { users }
</script>

<style>
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input[text], button {
  color: #333;
  font-family: Cambria, Georgia;
}
a {
  cursor: pointer;
  cursor: hand;
}
button {
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #aaa;
  cursor: auto;
}

/* Navigation link styles */
nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-right: 10px;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
nav a:visited, a:link {
  color: #607D8B;
}
nav a:hover {
  color: #039be5;
  background-color: #CFD8DC;
}
nav a.active {
  color: #039be5;
}

/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
<style scoped>
h1 {
  font-size: 1.2em;
  margin-bottom: 0;
}
h2 {
  font-size: 2em;
  margin-top: 0;
  padding-top: 0;
}
nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
nav a:visited, a:link {
  color: #334953;
}
nav a:hover {
  color: #039be5;
  background-color: #cfd8dc;
}
nav a.active {
  color: #039be5;
}
</style>