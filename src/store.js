import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        appname:"图灵公益",
        appnamepingying:"TuringPublic",
        bitaddress:'0x4256bC4F0eB5685936B55c13d40D0012DCa409F2'
    }
  })

export default store