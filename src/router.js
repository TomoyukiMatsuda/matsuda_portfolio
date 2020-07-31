import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import Works from './components/Works';

Vue.use(Router);

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/works',
      name: 'works',
      component: Works,
    }
  ]
})