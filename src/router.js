import Vue from 'vue'
import Router from 'vue-router'
// コンポーネントを読み込む
import Home from './views/Home.vue'
import About from './views/About.vue'
import Cats from './views/Cats.vue'
import Dogs from './views/Dogs.vue'
import Pet from './views/Pet.vue'



Vue.use(Router)
Cats
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/cats',
      name: 'cats',
      component: Cats
    },

    {
      path: '/dogs',
      name: 'dogs',
      component: Dogs
    },

    {
      path: '/pets/:species/:id',
      name: 'pet',
      component: Pet
    }
  ]
})
