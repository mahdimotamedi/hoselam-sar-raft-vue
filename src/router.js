import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FunList from './views/FunList'
import FunFact from './views/fun-pages/FunFact'
import Joke from './views/fun-pages/Joke'
import MarryWithWoman from './views/fun-pages/MarryWithWoman'
import MarryWithMan from './views/fun-pages/MarryWithMan'

Vue.use(Router);

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
        path: '/help',
        name: 'help',
        component: FunList
    },
    {
      path: '/fun/fact',
      name: 'fun-fact',
      component: FunFact
    },
    {
      path: '/fun/joke',
      name: 'fun-joke',
      component: Joke
    },
    {
      path: '/fun/marry/woman',
      name: 'marry-with-woman',
      component: MarryWithWoman
    },
    {
      path: '/fun/marry/man',
      name: 'marry-with-man',
      component: MarryWithMan
    }
  ]
})
