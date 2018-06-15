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
    }
  },
   mounted:function(){
/*
     //alert("res.body.data.url");
        this.$http.get("/pay/getPayUrl",{
          //headers:{
          //   'Access-Control-Allow-Origin': "true"
         // }
        }).then((res) => {
            alert(res);
        },(err) => {
            alert("err");
        });
*/

        //var userbitaddress = this.$store.state.bitaddress;
        var userbitaddress = "url=http://red.xunlei.com/html/guider.html?action=https%3A%2F%2Fsandbox-walletapi.onethingpcs.com%2Fapi%2Flinktest%2Ftx_info%2Fd79b1a9ccb2f9d939b991db9c63795ef";
          var canvas = document.getElementById('qrimg');
          
          QRCode.toCanvas(canvas, userbitaddress, function (error) {
          if (error) console.error(error)
            console.log('success!');
        });
        
   }
}
</script>
