<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login">
        <div class="login-con">
            <p><el-tag class="apptitle welcome">{{data.welcome}}</el-tag></p>
            <p><el-tag class="apptitle username">{{data.userName}}</el-tag></p>
            <p><el-tag class="apptitle address">{{data.address}}</el-tag></p>

            <el-button class= "goto" @click="gofundraising" type="primary">{{elements.fundraiser_button}}</el-button>
            <el-button class= "goto" @click="goregister" type="primary">{{elements.donor_button}}</el-button>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import Users from '../../js/users'
import fundraisingVue from '../fundraising/fundraising.vue';

const storage = require("../../libs/storage.js");
const strings = require("../../libs/strings.js").strings;

export default {
    data () {
        let currentUser = storage.getCurrentUserInfo();
        
        return {
            data: {
                welcome: strings.login.welcome + strings.settings.appname,
                userName: currentUser.userName,
                address: currentUser.address
            },
            elements:{
                fundraiser_button : strings.login.fundraiser_button,
                donor_button : strings.login.donor_button,
            }
        }
    },
    beforeCreate: function () {
      Users.init()
    },
    methods: {
        gofundraising () {
            Users.create("TestTx").then(tx => {
                console.log(tx)
                self.$router.push('/')
            }).catch(err => {
                console.log(err)
            })
            //this.$router.push({path: 'fundraising'});
        },
        goregister () {
            this.$router.push({path: 'donornow'});
        }
    }
};
</script>