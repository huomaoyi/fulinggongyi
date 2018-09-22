<style lang="less">
    @import './fundraising.less';
</style>

<template>
    <div class="fundraising">
      <tlgy-header></tlgy-header>
        <el-container class="body">
          <el-main class="apptitle">
            <el-form ref="fundraisingform" :model="fundraisingform" label-width="150px">
              <el-form-item label="姓名">
                <el-input v-model="fundraisingform.name"></el-input>
              </el-form-item>
              <el-form-item label="筹款钱包地址">
                <el-row>
                  <el-col :span="10"><el-input v-model="fundraisingform.address" id="address"></el-input></el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio v-model="fundraisingform.gender" label="male" class="moveleft movemiddle">男</el-radio>
                <el-radio v-model="fundraisingform.gender" label="female" class="moveleft movemiddle">女</el-radio>
              </el-form-item>
              <el-form-item label="身份证号">
                <el-input v-model="fundraisingform.idnumber"></el-input>
              </el-form-item>
              <el-form-item label="联系方式">
                <el-input v-model="fundraisingform.phonenumber"></el-input>
              </el-form-item>
               <el-form-item label="家庭住址">
                <el-input v-model="fundraisingform.homeaddress"></el-input>
              </el-form-item>
              <el-form-item label="筹款名称">
                <el-input v-model="fundraisingform.projectname"></el-input>
              </el-form-item>
              <el-form-item label="筹款简述">            
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="fundraisingform.description">
                </el-input>
              </el-form-item>
              <el-form-item label="筹款详情">            
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="fundraisingform.detail">
                </el-input>
              </el-form-item>
              <el-form-item label="预期筹款金额">
                <el-input v-model="fundraisingform.amount"></el-input>
              </el-form-item>
              <el-form-item label="预期筹款截止时间">
                <el-date-picker class="moveleft" v-model="fundraisingform.endtime" type="datetime" align="right" placeholder="选择日期"></el-date-picker>
              </el-form-item>                            
              <el-form-item id="actions">
                <el-button @click="handleSubmit('fundraisingform')" type="warning" round>{{elements.actions_button}}</el-button>
              </el-form-item>
            </el-form>
          </el-main>
        </el-container>
      <tlgy-foot></tlgy-foot>
    </div>
</template>

<script>
import header from '../common/header/header.vue'
import foot from '../common/foot/foot.vue'

import Vue from 'vue'

const storage = require("../../libs/storage.js");
const strings = require("../../libs/strings.js").strings;

export default {
  data(){
    let currentUser = storage.getCurrentUserInfo();
    return{
       fundraisingform: {
          name: currentUser.userName,
          address: currentUser.address,
          gender: currentUser.gender,          
          idnumber: currentUser.idNumber,
          phonenumber: currentUser.phoneNumber,
          homeaddress: currentUser.homeAddress,
          projectname: '',
          description: '',
          detail: '',
          amount: '',
          starttime: new Date(),
          endtime: ''
        },
        elements: {
            name_input: strings.fundraising.name_input,
            address_input: strings.fundraising.address_input,
            gender_input: strings.fundraising.gender_input,
            gender_male: strings.fundraising.gender_male,
            gender_female: strings.fundraising.gender_female,
            idnumber_input: strings.fundraising.idnumber_input,
            phonenumber_input: strings.fundraising.phonenumber_input,
            homeaddress_input: strings.fundraising.homeaddress_input,
            projectname_input: strings.fundraising.projectname_input,
            description_input: strings.fundraising.description_input,
            textarea_placeholder: strings.fundraising.textarea_placeholder,
            detail_input: strings.fundraising.detail_input,
            amount_input: strings.fundraising.amount_input,
            endtime_input: strings.fundraising.endtime_input,
            actions_button: strings.fundraising.actions_button
        },
        rules: {
          /*
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
          */
        }
    }
  },
  components: {
    'tlgy-header': header,
    'tlgy-foot': foot
  },
  methods: {
    handleSubmit(formName) {
      //save userinfo and project info to contract 
      this.$refs[formName].validate((valid) => {        
          if (valid) {
            this.$options.methods.submitUserInfo(this.$refs[formName].model);
            this.$options.methods.projectUserInfo(this.$refs[formName].model);
            this.$router.push({path: 'fundraisinginfo'});

          } else {
            console.log('validate failed!!');
            return false;
          }
        });
    },
    submitUserInfo(data) {
      let userInfo = {
        userName: data.name,
        address: data.address,
        realName: data.name,
        idNumber: data.idnumber,
        gender: data.gender,
        phoneNumber: data.phonenumber,
        homeAddress: data.homeaddress
      }

      storage.updateUserInfo(userInfo);
    },
    projectUserInfo(data) {
      let projectInfo = {
        address: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5", //need genrate and address for project
        name: data.projectname,
        creator: data.address,
        description: data.description,
        detail: data.detail,
        amount: data.amount,
        startTime: data.starttime,
        endTime: data.endtime,
        status: 0
      }

      storage.addProject(projectInfo);
    }
    /*
    gofailed () {
      this.$router.push({path: 'fundraisingfailed'});            
    },
    gosuccess () {
      this.$router.push({path: 'fundraisingsuccess'});
    },
    goinfo () {
      //this.$router.push({path: 'fundraisingfailed'});
      this.$router.push({path: 'fundraisinginfo'});
    }
    */
  }
}
</script>
