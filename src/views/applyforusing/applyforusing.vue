<style lang="less">
    @import './applyforusing.less';
</style>

<template>
    <div class="applyforusing">
      <tlgy-header></tlgy-header>
        <el-container class="body">
          <el-main class="apptitle">
            <el-form ref="form"  label-width="150px">
              <el-form-item label="申请费用">
                <el-input v-model="form.amount"></el-input>
              </el-form-item>
              <el-form-item label="申请时间">
                <el-input v-model="form.time"></el-input>
              </el-form-item>
              <el-form-item label="费用使用说明">            
                <el-input type="textarea" :rows="2" v-model="form.reason"/>
              </el-form-item>
              <el-form-item label="上传相关材料">
                <el-input v-model="form.images"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button  @click="handleSubmit" type="warning" round>提交申请</el-button>
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

export default {
  data(){
    return{
       form: {
          amount: '',
          time: '',
          reason: '',
          images:''
        }
    }
  },
  components: {
    'tlgy-header': header,
    'tlgy-foot': foot
  },
   methods: {
        handleSubmit () {
            this.$router.push({path: 'fundraisingusinginfo'});
        }
    }
}
</script>
