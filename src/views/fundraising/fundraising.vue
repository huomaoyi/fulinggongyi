<style lang="less">
    @import './fundraising.less';
</style>

<template>
    <div class="fundraising">
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
              <el-form-item label="家庭住址">
                <el-input v-model="form.address"></el-input>
              </el-form-item>
              <el-form-item label="身份证号">
                <el-input v-model="form.id"></el-input>
              </el-form-item>
              <el-form-item label="联系方式">
                <el-input v-model="form.iphone"></el-input>
              </el-form-item>
              <el-form-item label="预期筹款金额">
                <el-input v-model="form.amount"></el-input>
              </el-form-item>
              <el-form-item label="预期筹款截止时间">
                <el-date-picker class="moveleft" v-model="form.deadline" type="datetime" align="right" placeholder="选择日期"></el-date-picker>
              </el-form-item>
              <el-form-item label="链克钱包地址">
                <el-row>
                  <el-col :span="10"><el-input v-model="form.liankeaddress"></el-input></el-col>
                  <el-col :span="4"><el-button  @click="createqrcode" type="primary">生成二维码</el-button></el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="活动名称">
                <el-input v-model="form.activityname"></el-input>
              </el-form-item>
              <el-form-item label="筹款原因">            
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="form.reason">
                </el-input>
              </el-form-item>
              <el-form-item label="相关资料">
                <el-upload
                  class="upload-demo moveleft"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="6"
                  :on-exceed="handleExceed"
                  :file-list="form.fileList">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
              <el-form-item id="actions">
                <el-button @click="handleSubmit" type="warning" round>提交申请</el-button>
                <!-- <el-button  @click="gosuccess" type="success" round>申请成功</el-button>
                <el-button  @click="gofailed" type="danger" round>提交失败</el-button> -->
                <el-button  @click="goinfo" type="success" round>我的筹款</el-button>
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
import QRCode from 'qrcode'

Vue.use(QRCode)

export default {
  data(){
    return{
       form: {
          name: '',
          gender: '',
          address: '',
          id: '',
          iphone: '',
          amount: '',
          deadline: '',
          fileList: [],
          reason: ''
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
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 6 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    handleSubmit () {
      if (Math.random() > 0.5){
        this.$router.push({path: 'fundraisingsuccess'});
      }
      else{
        this.$router.push({path: 'fundraisingfailed'});
      }
    },
      createqrcode () {
        //this.$alert(`<img id='qrimg' src='../../src/assets/copyright.png'/>`, '地址二维码', {
      this.$alert(`<p><canvas id='qrimg'/></canvas></p><p id=bitaddress></p>`, '地址二维码', {
        dangerouslyUseHTMLString: true
      });
      
      var userbitaddress = this.$store.state.bitaddress;
      var bitaddress = document.getElementById('bitaddress');
      var canvas = document.getElementById('qrimg');

      bitaddress.innerText = userbitaddress;
      QRCode.toCanvas(canvas, userbitaddress, function (error) {
        if (error) console.error(error)
            console.log('success!');
      });
    },
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
  }
}
</script>
