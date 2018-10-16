import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Web3 from 'web3'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store.js"

Vue.config.productionTip = false;

window.addEventListener('load', function () {
  if (typeof web3 !== 'undefined') {
    console.log('Web3 injected browser: OK.')
    // window.web3 = new Web3(window.web3.currentProvider)
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
  } else {
    console.log('Web3 injected browser: Fail. You should consider trying MetaMask.')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
  }

  Vue.use(ElementUI);

  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  });
})