import App from './App.vue'
Vue.config.productionTip = false

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
// 1. Define route components.
// These can be imported from other files
import UserDetails from './components/UserDetails.vue'
import Users from './components/Users.vue'
import Dashboard from './components/Dashboard.vue'
import Add from './components/Add.vue'
import Search from './components/Search.vue'
import Email from './components/Email.vue'
import FirstName from './components/FirstName.vue'
import LastName from './components/LastName.vue'

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/users', component: Users },
  { path: '/dashboard', component: Dashboard },
  { path: '/add', component: Add },
  { path: '/detail/:id', component: UserDetails, name: 'detail' },
  { path: "/user-search-first-name", component: FirstName },
  { path: "/user-search-last-name", component: LastName },
  { path: "/user-search-email", component: Email },
  { path: "/user-search", component: Search }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
