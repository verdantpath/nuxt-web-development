<template>
  <ul>
    <li v-for="user in users" v-bind:key="user.id">
      <nuxt-link :to="`users/${user.id}`">
        {{ user.name }}
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import axios from 'axios'
  export default {
    async asyncData() {
      // return new Promise((resolve) => {
      //   setTimeout(function() {
      //     resolve({ name: 'world' })
      //   }, 1000)
      // })
    //   let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    //   return { users: data }
    },
    data() {
      return { users: [] }
    },
    async fetch() {
      let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      this.users = data
    }
  }
</script>
<style>

</style>