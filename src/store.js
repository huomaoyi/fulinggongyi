import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        appname:"图灵公益",
        appnamepingying:"TuringPublic",
        bitaddress:'0x5c949f437ef1cd1fe2f0d6268931ff3f29b04662'
    }
  })

export default store