import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import HomePage from './components/HomePage/HomePage.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: HomePage },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
