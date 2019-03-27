import Vue from 'vue';
import App from './App.vue';
import firebase from 'firebase';
import router from './router';

const config = {
  apiKey: 'AIzaSyAkq2bakeBSuTfFd-gP61XnOLZytzXGomc',
  authDomain: 'amethyst-blog.firebaseapp.com',
  databaseURL: 'https://amethyst-blog.firebaseio.com',
  projectId: 'amethyst-blog',
  storageBucket: 'amethyst-blog.appspot.com',
  messagingSenderId: '223160197576',
};
firebase.initializeApp(config);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
