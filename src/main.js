// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import'./assets/css/bootstrap-3.3.6-dist/css/bootstrap.css'
import './assets/css/font-awesome-4.7.0/css/font-awesome.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuwe from '.././vuwe'
Vue.use(Vuwe);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
