import Vue from 'vue';
import Router from 'vue-router';
import IndexView from '../views/Index';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexView',
      component: IndexView
    }
  ]
})
