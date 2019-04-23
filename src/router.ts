import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import BlogListing from './views/BlogListing.vue';
import BlogEntry from './views/BlogEntry.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogListing,
    },
    {
      path: '/blog/:slug',
      name: 'blog-entry',
      component: BlogEntry,
    },
  ],
});
