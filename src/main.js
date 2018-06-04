import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store.js"

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});