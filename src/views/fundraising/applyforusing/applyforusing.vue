<style lang="less">
    @import './applyforusing.less';
</style>

<template>
    <div class="applyforusing">
      <tlgy-header></tlgy-header>
        <el-container class="body">
          <el-header class="title">使用募款申请</el-header>
          <el-main class="apptitle">
            <el-form ref="form" :model="form" label-width="150px">
              <el-form-item label="标题">
                <el-input v-model="form.title"></el-input>
              </el-form-item>
              <el-form-item label="金额">
                <el-input v-model="form.amount"></el-input>
              </el-form-item>
              <el-form-item label="截止时间">
                <el-input v-model="form.endTime"></el-input>
              </el-form-item>
              <el-form-item label="费用使用说明">            
                <el-input type="textarea" :rows="2" v-model="form.description"/>
              </el-form-item>
              <el-form-item id="actions">
                <el-button  @click="handleSubmit('form')" type="warning" round>提交申请</el-button>
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

const storage = require("../../../libs/storage.js");
const tools = require("../../../libs/tools.js");
const strings = require("../../../libs/strings.js").strings.applyforusing;

export default {
  data(){
    return{
       form: {
         title: '',
         amount: '',
         endTime: '',
         description: ''
        },
        elemnts:{
          apply_for_use_text: strings.apply_for_use_text,
          apply_for_use_submit: strings.apply_for_use_submit,
        },
        rules: {
        }
    }
  },
  components: {
    'tlgy-header': header,
    'tlgy-foot': foot
  },
   methods: {     
      handleSubmit (formName) {
         this.$refs[formName].validate((valid) => {        
          if (valid) {
            this.$options.methods.submitStageInfo(this.$refs[formName].model);
            this.$router.push({path: 'fundraisinginfo'});
          } else {
            console.log('validate failed!!');
            return false;
          }
        });
      },
      submitStageInfo(data) {
        let project = storage.getProjectInfoByCreateAddress(storage.getCurrentUserAddress());
        let stages = storage.getStagesInfoByProjectAddress(project.address);
        let stageId = storage.getStageTotalCount() + 1;

        storage.addStage({
          id: stageId,
          index: stages.length + 1,
          title: data.title,
          projectAddress: project.address,
          description: data.description,
          amount: data.amount,
          startTime: new Date,
          endTime: data.endTime,
          status: 1
        });
      }
    }
}
</script>
