import Vue from 'vue';
import App from './App.vue';
import router from './router';
import moment from 'moment';

Vue.config.productionTip = false;

Vue.filter('formatDate', (date: string) => moment(date).format('dddd, MMMM Do YYYY'));

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
