import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import List from '@/components/List';
import Detail from '@/components/Detail';
import Home from '@/components/HelloFromVux';
import Query from '@/components/Query';
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
      path: '/query',
      name: 'Query',
      component: Query,
    },, {
      path: '/list',
      name: 'List',
      component: List,
    }, {
      path: '/list/:id',
      name: 'List_Detail',
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
