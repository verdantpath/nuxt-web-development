<template>
<div class="row">
  <div id="accordion">...</div>
  <div class="grid-x">
    <div class="medium-6 cell">
      <img class="welcome" src="~/assets/images/sample-01.jpg">
    </div>
    <div class="medium-6 cell">
      <img class="welcome" src="~/assets/images/sample-02.jpg" alt="">
    </div>
  </div>
  </div>
  
</template>

<script>
import $ from 'jquery'
export default {
  mounted() {
    $('#accordion').accordion()
  }
}
</script>