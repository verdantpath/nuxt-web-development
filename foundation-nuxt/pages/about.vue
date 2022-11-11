<template>
  <div class="container">
    <p>About Page</p>
    <nuxt-link to="/">Go to Home foo</nuxt-link>
    <sample-1 />
    <sample-2 />
  </div>
</template>
<script>
import Mixin from '~/plugins/mixin-basic.js'
  export default {
    mixins: [Mixin],
    asyncData() {
      // return new Promise((resolve) => {
      //   setTimeout(function() {
      //     resolve({})
      //   }, 1000)
      // })
    } 
  }
</script>
<style>

</style>