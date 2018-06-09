<style lang="less">
    @import './applyforusing.less';
</style>

<template>
    <div class="applyforusing">
      <tlgy-header></tlgy-header>
        <el-container class="body">
          <el-header class="title">使用募款申请</el-header>
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
          fileList:[]
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
            this.$router.push({path: 'fundraisingsuccess'});
        },
        handleSubmit () {
            this.$router.push({path: 'fundraisingusinginfo'});
        }
    }
}
</script>
