import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        appname:"图灵公益",
        appnamepingying:"TuringCharity"
    }
  })

export default store