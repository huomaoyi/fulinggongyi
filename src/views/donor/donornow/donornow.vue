<style lang="less">
    @import './donornow.less';
</style>

<template>
    <div class="donornow">
      <tlgy-header></tlgy-header>
        <el-container class="body">
          <el-main class="apptitle">
            <el-form ref="form"  label-width="150px">
              <el-form-item label="项目">
                <el-select v-model="form.project" placeholder="请选择" class="moveleft">
                    <el-option label="小明白血病" value="小明白血病"></el-option>
                    <el-option label="小红冠心病" value="小红冠心病"></el-option>
                    <el-option label="小黄眼角膜修复" value="小黄眼角膜修复"></el-option>
                </el-select>
              </el-form-item>
               <el-form-item label="捐款金额(链克)">
                <el-input v-model="form.amount" id="liankeamount" class="moveleft" style="width:100px;"></el-input>
                <p id="liankeurl">{{liankeUrl}}</p>
              </el-form-item>
              <el-form-item label="扫码捐款">
                <p><canvas id='qrimg' class="moveleft"></canvas></p>
              </el-form-item>
              <el-form-item label="链克地址">
                <el-input v-model="form.liankeaddress" :disabled="true" class="moveleft" style="width:400px;"></el-input>
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
import VueResource from 'vue-resource';

Vue.use(VueResource)
Vue.use(QRCode)

export default {
  data(){
    return{
       form: {
          project: '',
          amount: 1,
          liankeaddress: this.$store.state.bitaddress
        }
    }
  },
  components: {
    'tlgy-header': header,
    'tlgy-foot': foot
  },
   methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    refreshqr(){
      var userbitaddress = "";
      var amount = this.form.amount;

      this.$http.get("/pay/getPayUrl/?amount=" + amount).then((res) => {
        userbitaddress = res.data.data.url;
        
        var canvas = document.getElementById('qrimg');
        QRCode.toCanvas(canvas, userbitaddress, function (error) {
        if (error) console.error(error)
          console.log('success!');
        });
      },(err) => {
          alert("load qr failed");
      });

      return userbitaddress;
    }
  },
  computed:{
    liankeUrl:function(){
      return this.refreshqr();
    }
  }
}
</script>
