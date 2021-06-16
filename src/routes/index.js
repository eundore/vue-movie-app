import { createRouter,createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  // Hash
  // https://google.com/#/search
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top : 0 }
  },
  //pages
  // https://google.com/about
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)', // 그 외에 나머지 페이지 연결
      component: NotFound
    }
  ]
})