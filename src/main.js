import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';

//Config routes
import routes from '@/routes';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app');
