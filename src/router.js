import Vue from 'vue'
import Router from 'vue-router'
// コンポーネントを読み込む
import Home from './views/Home.vue'
import About from './views/About.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',      // このパスにアクセスしたら
      name: 'home',
      component: Home // このコンポーネントを呼ぶ
    },
    {
      path: '/about',
      name: 'aboute',
      component: About
    }

  ]
})