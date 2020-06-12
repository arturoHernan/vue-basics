import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '@/views/Search.vue';
import MyCollections from '@/views/MyCollections.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'search',
    component: Search
  },
  {
    path: '/mycollections',
    name: 'mycollections',
    component: MyCollections
  }
]

const router = new VueRouter({
  routes
})

export default router
