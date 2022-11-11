<template>
  <div class="welcome">
    <Nav
    v-for="item in nav"
    </Nav>
    <ul class="menu align-center">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/form">Form</nuxt-link></li>
      <li><nuxt-link to="/motion-ui">Motion UI</nuxt-link></li>
      <li><nuxt-link to="/animate">Animate</nuxt-link></li>
      <li><nuxt-link to="/users">Users</nuxt-link></li>
    </ul>
    <nuxt />
  </div>
</template>

<script>
import Nav from '~/components/nav.vue'
import Social from '~/components/social.vue'


export default {
  mounted () {
    this.$getCurrentScreenSize()
  },
  components: {
    Nav,
    Social
}
}
</script>