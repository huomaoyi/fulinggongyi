<style lang="less">
    @import './donorregister.less';
</style>

<template>
    <div class="donorregister">
      <tlgy-header></tlgy-header>
        <el-container class="body">
          <el-main class="apptitle">
            <el-form ref="form"  label-width="150px">
              <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
               <el-form-item label="性别">
                <el-radio v-model="form.gender" label="1" class="moveleft movemiddle">男</el-radio>
                <el-radio v-model="form.gender" label="2" class="moveleft movemiddle">女</el-radio>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="form.iphone"></el-input>
              </el-form-item>
              <el-form-item label="捐款金额">
                <el-input v-model="form.amount"></el-input>
              </el-form-item>
              <el-form-item label="链克钱包地址">
                <el-input v-model="form.liankeaddress"></el-input>
              </el-form-item>
              <el-form-item id="actions">
                <el-button @click="handleSubmit" type="warning" round>我要捐钱</el-button>
                <!--<el-button  @click="goinfo" type="info" round>我的筹款</el-button>-->
              </el-form-item>
            </el-form>
          </el-main>
        </el-container>
      <tlgy-foot></tlgy-foot>
    </div>
</template>

<script>
import header from '../../common/header/header.vue'
import foot from '../../common/foot/foot.vue'

import Vue from 'vue'
import QRCode from 'qrcode'

Vue.use(QRCode)

export default {
  data(){
    return{
       form: {
          name: '',
          gender:'',
          iphone: '',
          email: '',
          liankeaddress: '',
          amount: ''
        }
    }
  },
  components: {
    'tlgy-header': header,
    'tlgy-foot': foot
  },
   methods: {
    handleSubmit () {
      this.$router.push({path: 'fundraisinginfo'});
    }
  }
}
</script>
