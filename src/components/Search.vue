
<template>
  <div>
    <h2>Search User</h2>
    <nav>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/user-search-first-name">By First Name</router-link>
      <router-link to="/user-search-last-name">By Last Name</router-link>
      <router-link to="/user-search-email">By Email</router-link>
    </nav>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
    
  </div> 
</template>

<script>
export default {
  name: 'Search',
  components: {
    
  }
}
</script>
