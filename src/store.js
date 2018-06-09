import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        appname:"图灵公益",
        appnamepingying:"TuringPublic",
        bitaddress:'0x133A629D34777d6638D4C2022Ec7FcA8651f32C8'
    }
  })

export default store