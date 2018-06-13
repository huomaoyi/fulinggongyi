import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        appname:"图灵公益",
        appnamepingying:"TuringPublic",
        bitaddress:'http://red.xunlei.com/html/guider.html?action=https%3A%2F%2Fsandbox-walletapi.onethingpcs.com%2Fapi%2Flinktest%2Ftx_info%2Fe453b2ba441bb8421ee890a7da9281e3'
    }
  })

export default store