import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import List from '@/components/List';
import Detail from '@/components/Detail';
import Home from '@/components/HelloFromVux';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login',
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
    }, {
      path: '/todo',
      name: 'TODO',
      component: List,
    }, {
      path: '/todo/:id',
      name: 'TODO_DETAIL',
      component: Detail,
    }, {
      path: '/undo',
      name: 'UNDO',
      component: List,
    }, {
      path: '/undo/:id',
      name: 'UNDO_DETAIL',
      component: Detail,
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
    }, {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
