import Vue from 'vue'
import Sample from '~/plugins/global/sample-1.vue'

Vue.component('sample-1', Sample)

Vue.component('sample-2', {
  render(createElement) {
    return createElement('p', 'A message from sample global component 2.')
  }
})