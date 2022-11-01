<template>
  <div>
    <h1 data-animation="spin-in"><i class="fi-heart"></i>Hello Motion UI</h1>
    <h5>{{ title }}</h5>
  </div>
</template>
<script>
import $ from 'jquery'
import axios from 'axios'
export default {
  data() {
    return {
      title: ''
    }
  },
  async fetch () {
    let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
    // console.log('params', context.params)
    console.log('data', data)
    this.title = data.title
  },
  mounted() {
    $('h1').on('click', () => {
      var $animation = $('h1').data('animation')
      this.$motionUi.animateIn($('h1'), $animation)
    });
  }
}
</script>
<style>

</style>