<template>
  <div v-if="user">
    <h2>{{ user.name }}</h2>
    <nuxt-link class="button" to="/users">
      Users
    </nuxt-link>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    async asyncData ({ params }) {
      let { data } = await
      axios.get('https://jsonplaceholder.typicode.com/users/' + params.id)
      return { user: data }
    }
  }
</script>
<style>

</style>