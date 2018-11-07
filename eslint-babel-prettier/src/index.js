import Vue from 'vue'
import App from './components/App.vue'

const vue = new Vue({
  el: '#app',
  render: h => h(App),
})

console.log(vue.$el)
